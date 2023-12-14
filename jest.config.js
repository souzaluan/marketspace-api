module.exports = {
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testMatch: ['**/**/*.spec.ts']
}
