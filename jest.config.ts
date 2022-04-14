import {defaults as tsjPreset} from 'ts-jest/presets'

export default {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json'
    }
  },
  preset: 'ts-jest',
  resetMocks: true,
  rootDir: './src/tests',
  testEnvironment: "node",
  transform: {
    ...tsjPreset.transform,
  },
  verbose: true,
};
