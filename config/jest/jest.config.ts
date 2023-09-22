import type { Config } from 'jest';
import { resolve } from 'path';

const config: Config = {
  clearMocks: true,
  verbose: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>/src'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': resolve(
      __dirname,
      'JestEmptyComponent.tsx',
    ),
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};

export default config;
