module.exports = {
  roots: [
    '<rootDir>'
  ],
  testMatch: [
    '<rootDir>/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/*.include.{js,ts}',
    '!<rootDir>/build/**/*.{js,ts}',
    '!<rootDir>/coverage/**/*.{js,ts}',
    '!<rootDir>/__tests__/**/*.{js,ts}',
    '!**/jest.*.{js,ts}',
    '!<rootDir>/.yarn/**',
    '!<rootDir>/*config.{js,ts}',
    '!<rootDir>/.*.{js,ts}'
  ]
}
