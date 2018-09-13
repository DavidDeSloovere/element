import { NodeVM } from 'vm2'
import * as Faker from 'faker'
import * as nodeAssert from 'assert'
import { EventEmitter } from 'events'

import { Step, StepFunction, StepOptions, normalizeStepOptions } from './Step'
import Test from './Test'
import { ITestScript, TestScriptErrorMapper, TestScriptError } from '../TestScript'
import { DEFAULT_SETTINGS, ConcreteTestSettings, normalizeSettings, TestSettings } from './Settings'
import { RuntimeEnvironment } from '../runtime-environment/types'
import { expect } from '../utils/Expect'

import { Until } from '../page/Until'
import { By } from '../page/By'
import { MouseButtons, Device, Key, userAgents } from '../page/Enums'

import { TestDataSource, TestDataFactory } from '../test-data/TestData'
import { BoundTestDataLoaders } from '../test-data/TestDataLoaders'

// TODO work out the right type for floodElementActual
function createVirtualMachine(floodElementActual: any): NodeVM {
	return new NodeVM({
		console: 'redirect',
		sandbox: {},
		require: {
			external: false,
			builtin: [],
			context: 'sandbox',
			mock: {
				'@flood/chrome': floodElementActual,
				'@flood/element': floodElementActual,
				faker: Faker,
				assert: nodeAssert,
			},
		},
	})
}

export class EvaluatedScript implements TestScriptErrorMapper {
	public steps: Step[]
	public settings: ConcreteTestSettings
	public testData: TestDataSource<any>

	private vm: NodeVM

	constructor(public runEnv: RuntimeEnvironment, public script: ITestScript, lazyEval = false) {
		if (!lazyEval) {
			this.evaluate()
		}
	}

	public isScriptError(error: Error): boolean {
		return this.script.isScriptError(error)
	}
	public maybeLiftError(error: Error): Error {
		return this.script.maybeLiftError(error)
	}
	public liftError(error: Error): TestScriptError {
		return this.script.liftError(error)
	}
	public filterAndUnmapStack(stack: string | Error | undefined): string[] {
		return this.script.filterAndUnmapStack(stack)
	}

	public bindTest(test: Test): void {
		if (this.vm === undefined)
			throw new Error('bindTest: no vm created - script must be evaluated first')

		const { reporter } = test

		// hack because the vm2 typings don't include their EventEmitteryness
		let eevm = (this.vm as any) as EventEmitter
		;['log', 'info', 'error', 'dir', 'trace'].forEach(key =>
			eevm.on(`console.${key}`, (message, ...args) =>
				reporter.testScriptConsole(key, message, ...args),
			),
		)
	}

	public async beforeTestRun(): Promise<void> {
		await this.testData.load()
	}

	private _testDataLoaders: TestDataFactory | undefined
	public get testDataLoaders(): TestDataFactory {
		if (this._testDataLoaders === undefined) {
			this._testDataLoaders = new BoundTestDataLoaders(this, this.runEnv.workRoot)
			this._testDataLoaders.fromData([{}])
		}

		return this._testDataLoaders
	}

	public evaluate(): EvaluatedScript {
		console.log('evaluating script')
		// Clear existing steps
		const steps: Step[] = []

		let rawSettings = DEFAULT_SETTINGS

		const ENV = this.runEnv.stepEnv()

		// closes over steps: Step[]
		const step = (...args: any[]) => {
			// name: string, fn: (driver: Browser) => Promise<void>
			let name: string
			let fn: StepFunction<any>
			let stepOptions: StepOptions = {}

			if (args.length === 3) {
				;[name, stepOptions, fn] = args
				stepOptions = normalizeStepOptions(stepOptions)
			} else {
				;[name, fn] = args
			}

			console.assert(typeof name === 'string', 'Step name must be a string')
			if (steps.find(({ name: stepName }) => name === stepName)) {
				console.warn(`Duplicate step name: ${name}, skipping step`)
				return
			}
			steps.push({ fn, name, stepOptions })
		}

		let context = {
			setup: (settings: TestSettings) => {
				Object.assign(rawSettings, settings)
			},

			ENV,

			// Supports either 2 or 3 args
			step,
			// Actual implementation of @flood/chrome
			By,
			Until,
			Device,
			MouseButtons,
			TestData: this.testDataLoaders,
			Key,
			userAgents,

			test() {
				throw new Error(`test() is no longer supported, please use 'export default suite(...)'`)
			},
		}

		this.vm = createVirtualMachine(context)

		rawSettings.name = this.script.testName
		rawSettings.description = this.script.testDescription

		let result = this.vm.run(this.script.vmScript)

		const { scriptSettings } = result
		if (scriptSettings) {
			rawSettings = { ...rawSettings, ...scriptSettings }
		}

		let testFn = expect(result.default, 'Test script must export a default function')

		/**
		 * Evaluate default function
		 */
		testFn.apply(null, [step])

		this.settings = {
			...DEFAULT_SETTINGS,
			...normalizeSettings(rawSettings),
		}

		this.steps = steps

		return this
	}
}