/* eslint-disable */
export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	setupFiles: ['<rootDir>/__tests__/jest-setup.js'],
	transform: {
		'^.+\\.[tj]s$': [
			'ts-jest',
			{ tsconfig: '<rootDir>/tsconfig.spec.json' },
		],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
}
