module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/test-mock.js'),
    '\\.jpeg$': require.resolve('./test/test-mock.js'),
  },
};
