const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.',
});

module.exports = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
});
