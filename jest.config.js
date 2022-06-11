module.exports = {
    bail: true,
    clearMocks: true,
    coverageProvider: 'v8',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js?(x)', '**/tests/**/**/*.test.js?(x)'],
    testResultsProcessor: "jest-sonar-reporter"
};
