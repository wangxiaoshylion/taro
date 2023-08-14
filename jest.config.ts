const defineJestConfig = require('@tarojs/test-utils-react/dist/jest.js').default;

module.exports = defineJestConfig({
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  // transform: {
  //   "^.+\\.(t|j)sx?$": ['ts-jest'],
  // },
});
