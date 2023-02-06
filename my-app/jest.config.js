module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [ '<rootDir>/src/components/**/*.{js,vue}',
  ],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
