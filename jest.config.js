const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/test-mock.js'),
    '\\.jpeg$': require.resolve('./test/test-mock.js'),
    '(react-rewards)': require.resolve('./test/test-mock.js'),
  },
  setupTestFrameworkScriptFile: require.resolve('./test/test-setup.js'),
};
