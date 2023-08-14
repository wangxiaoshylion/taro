// eslint-disable-next-line @typescript-eslint/no-var-requires
const defineJestConfig = require('@tarojs/test-utils-react/dist/jest.js').default;

module.exports = defineJestConfig({
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // transform: {
  //   "^.+\\.(t|j)sx?$": ['ts-jest'],
  // },
  // preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  }, // jest设置测试文件引入别名
});
