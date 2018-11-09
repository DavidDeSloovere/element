/**
 *
 * @article_group API
 * @position 10
 * @export
 * @enum {number}
 */
export enum MouseButtons {
	LEFT = 'left',
	RIGHT = 'right',
	MIDDLE = 'middle',
}

/**
 * Chrome DevTools Device Emulation
 * @article_group Constants
 */
export enum Device {
	'blackberryPlayBook' = 'Blackberry PlayBook',
	'blackberryPlayBookLandscape' = 'Blackberry PlayBook landscape',
	'blackBerryZ30' = 'BlackBerry Z30',
	'blackBerryZ30Landscape' = 'BlackBerry Z30 landscape',
	'galaxyNote_3' = 'Galaxy Note 3',
	'galaxyNote_3Landscape' = 'Galaxy Note 3 landscape',
	'galaxyNoteIi' = 'Galaxy Note II',
	'galaxyNoteIiLandscape' = 'Galaxy Note II landscape',
	'galaxySIii' = 'Galaxy S III',
	'galaxySIiiLandscape' = 'Galaxy S III landscape',
	'galaxyS5' = 'Galaxy S5',
	'galaxyS5Landscape' = 'Galaxy S5 landscape',
	'iPad' = 'iPad',
	'iPadLandscape' = 'iPad landscape',
	'iPadMini' = 'iPad Mini',
	'iPadMiniLandscape' = 'iPad Mini landscape',
	'iPadPro' = 'iPad Pro',
	'iPadProLandscape' = 'iPad Pro landscape',
	'iPhone4' = 'iPhone 4',
	'iPhone4Landscape' = 'iPhone 4 landscape',
	'iPhone5' = 'iPhone 5',
	'iPhone5Landscape' = 'iPhone 5 landscape',
	'iPhone6' = 'iPhone 6',
	'iPhone6Landscape' = 'iPhone 6 landscape',
	'iPhone6Plus' = 'iPhone 6 Plus',
	'iPhone6PlusLandscape' = 'iPhone 6 Plus landscape',
	'iPhoneX' = 'iPhone X',
	'iPhoneXLandscape' = 'iPhone X landscape',
	'kindleFireHdx' = 'Kindle Fire HDX',
	'kindleFireHdxLandscape' = 'Kindle Fire HDX landscape',
	'lgOptimusL70' = 'LG Optimus L70',
	'lgOptimusL70Landscape' = 'LG Optimus L70 landscape',
	'microsoftLumia550' = 'Microsoft Lumia 550',
	'microsoftLumia950' = 'Microsoft Lumia 950',
	'microsoftLumia950Landscape' = 'Microsoft Lumia 950 landscape',
	'nexus10' = 'Nexus 10',
	'nexus10Landscape' = 'Nexus 10 landscape',
	'nexus4' = 'Nexus 4',
	'nexus4Landscape' = 'Nexus 4 landscape',
	'nexus5' = 'Nexus 5',
	'nexus5Landscape' = 'Nexus 5 landscape',
	'nexus5X' = 'Nexus 5X',
	'nexus5XLandscape' = 'Nexus 5X landscape',
	'nexus6' = 'Nexus 6',
	'nexus6Landscape' = 'Nexus 6 landscape',
	'nexus6P' = 'Nexus 6P',
	'nexus6PLandscape' = 'Nexus 6P landscape',
	'nexus7' = 'Nexus 7',
	'nexus7Landscape' = 'Nexus 7 landscape',
	'nokiaLumia_520' = 'Nokia Lumia 520',
	'nokiaLumia_520Landscape' = 'Nokia Lumia 520 landscape',
	'nokiaN9' = 'Nokia N9',
	'nokiaN9Landscape' = 'Nokia N9 landscape',
}

/**
 * Lists all available keyboard control keys which can be used when sending a key press combination.
 *
 * @article_group Constants
 * @export
 * @enum {number}
 */
export const Key = {
	NULL: null,
	CANCEL: 'Cancel', // ^break
	HELP: 'Help',
	BACK_SPACE: 'Backspace',
	TAB: 'Tab',
	CLEAR: 'Clear',
	RETURN: 'Enter',
	ENTER: 'Enter',
	SHIFT: 'ShiftLeft',
	CONTROL: 'ControlLeft',
	ALT: 'AltLeft',
	PAUSE: 'Pause',
	ESCAPE: 'Escape',
	SPACE: 'Space',
	PAGE_UP: 'PageUp',
	PAGE_DOWN: 'PageDown',
	END: 'End',
	HOME: 'Home',
	ARROW_LEFT: 'ArrowLeft',
	LEFT: 'ArrowLeft',
	ARROW_UP: 'ArrowUp',
	UP: 'ArrowUp',
	ARROW_RIGHT: 'ArrowRight',
	RIGHT: 'ArrowRight',
	ARROW_DOWN: 'ArrowDown',
	DOWN: 'ArrowDown',
	INSERT: 'Insert',
	DELETE: 'Delete',
	SEMICOLON: 'Semicolon',
	EQUALS: 'Equal',

	NUMPAD0: 'Numpad0',
	NUMPAD1: 'Numpad1',
	NUMPAD2: 'Numpad2',
	NUMPAD3: 'Numpad3',
	NUMPAD4: 'Numpad4',
	NUMPAD5: 'Numpad5',
	NUMPAD6: 'Numpad6',
	NUMPAD7: 'Numpad7',
	NUMPAD8: 'Numpad8',
	NUMPAD9: 'Numpad9',
	MULTIPLY: 'NumpadMultiply',
	ADD: 'NumpadAdd',
	SEPARATOR: null,
	SUBTRACT: 'NumpadSubtract',
	DECIMAL: 'NumpadDecimal',
	DIVIDE: 'NumpadDivide',

	F1: 'F1',
	F2: 'F2',
	F3: 'F3',
	F4: 'F4',
	F5: 'F5',
	F6: 'F6',
	F7: 'F7',
	F8: 'F8',
	F9: 'F9',
	F10: 'F10',
	F11: 'F11',
	F12: 'F12',

	COMMAND: 'MetaLeft',
	META: 'MetaLeft',
}

/**
 * @article_group Constants
 */
export const userAgents = {
	iphone:
		'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3',
	ipod:
		'Mozilla/5.0 (iPod; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
	ipad:
		'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
	safariOSX:
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25',
	safariWindows:
		'Mozilla/5.0 (Windows; Windows NT 6.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
	ie7: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
	ie8: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
	ie9: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
	chromeOSX:
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
	chromeWindows:
		'Mozilla/5.0 (Windows; Windows NT 6.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
	ffOSX: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:11.0) Gecko/20100101 Firefox/11.0',
	ffWindows: 'Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0',
	operaOSX: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.7.4; U; en) Presto/2.10.229 Version/11.62',
	operaWindows: 'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.10.229 Version/11.62',
	robot: 'I AM ROBOT',
}
