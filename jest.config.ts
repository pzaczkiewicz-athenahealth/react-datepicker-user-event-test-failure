import type { JestConfigWithTsJest } from 'ts-jest';

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const ignorePaths = [
  'node_modules',
  '<rootDir>/.git',
  '<rootDir>/.yarn',
  '<rootDir>/packages/react-datepicker-user-event-test-failure/dist',
  '<rootDir>/packages/react-datepicker-user-event-test-failure-icons/dist',
  '<rootDir>/packages/react-datepicker-user-event-test-failure-shared/dist',
  '<rootDir>/packages/storybook/dist',
  '<rootDir>/packages/react-datepicker-user-event-test-failure-react-17-tests',
];

const config: JestConfigWithTsJest = {
  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy"
  },
  // Jest finds two package.json files for packages/react-datepicker-user-event-test-failure without this config option.
  modulePathIgnorePatterns: ignorePaths,

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // Custom resolver to deal with nanoid being imported as EsModule
  resolver: `${__dirname}/test/resolver.js`,

  roots: ['<rootDir>'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./test/setup.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The regex pattern Jest uses to detect test files
  // Default: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
  testRegex: 'packages/[^/]+/src/.*[.]test[.][jt]sx?$',

  testPathIgnorePatterns: ignorePaths,

  testTimeout: 30000,

  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig-jest.json' }],
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.jest.js' }],
    '^.+\\.svg$': 'jest-transformer-svg'
  },
};
export default config;
