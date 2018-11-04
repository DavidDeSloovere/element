/**
 * @docPage Waiters
 */
export { Until } from './src/page/Until'

/**
 * @docPage Waiters
 */
export { Condition } from './src/page/Condition'

/**
 * @docPage Constants
 */
export { Device, Key, MouseButtons } from './src/page/Enums'

/**
 * Locators make it easy to locate elements on the page.
 *
 * @docPage Locators
 */
export { By } from './src/page/By'

/**
 * @docPage Locators
 */
export { Locator } from './src/page/types'

/**
 * @docPage ElementHandle
 */
export { ElementHandle } from './src/page/types'

/**
 * @docPage TargetLocator
 */
export { TargetLocator } from './src/page/types'

/**
 * @docPage TestData
 * @docAlias TestDataFactory TestData
 */
export { TestDataFactory, TestDataSource } from './src/test-data/TestData'

import { NullTestDataLoaders } from './src/test-data/TestDataLoaders'
/**
 * `TestData` is a pre-configured instance of <[TestDataFactory]> that can be used to prepare test data for your script.
 *
 * **Example**
 * ```typescript
 * import { step, Browser, TestData, TestSettings } from '@flood/element'
 *
 * interface Row {
 *   username: string
 *   userID: number
 * }
 * TestData.fromCSV<Row>('users.csv').shuffle()
 * ```
 *
 * @docPage TestData
 */
export const TestData = new NullTestDataLoaders()

/**
 * @docPage TestData
 */
export { Feeder } from './src/test-data/Feeder'

/**
 * @docPage Settings
 */
export {
	TestSettings,
	setup,
	DEFAULT_SETTINGS,
	ConsoleMethod,
	ResponseTiming,
} from './src/runtime/Settings'

/**
 * @docPage DSL
 */
export { FloodProcessEnv } from './src/runtime-environment/types'

import { FloodProcessEnv, nullFloodProcessEnv } from './src/runtime-environment/types'

/**
 * A subset of `process.env` available to this test. It is of type <[FloodProcessEnv]>.
 * @docPage DSL
 */
export const ENV: FloodProcessEnv = nullFloodProcessEnv

/**
 * @docPage Browser
 */
export { Browser, Browser as Driver, Locatable, NullableLocatable } from './src/runtime/types'

/**
 * @docPage Puppeteer
 */
export {
	ClickOptions,
	ScreenshotOptions,
	NavigationOptions,
	BoundingBox,
	LoadEvent,
} from 'puppeteer'

/**
 * @docPage DSL
 */
export { step, StepFunction, StepOptions } from './src/runtime/Step'

/**
 * @docPage DSL
 */
export { suite } from './src/runtime/types'
