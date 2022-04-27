import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const devConfig = {
  type: 'postgres',
  url: process.env.DB_URI_DEV,
  logging: false,
  entities: [`${path.join(__dirname, '../entities/**/*.*')}`],
  migrations: [`${path.join(__dirname, '../migrations/**/*.*')}`],
  cli: {
    entitiesDir: path.join(__dirname, '../entities'),
    migrationsDir: path.join(__dirname, '../migrations'),
  },
} as ConnectionOptions;

const prodConfig = {
  ...devConfig,
  url: process.env.DB_URI_PROD,
  ssl: { rejectUnauthorized: false },
} as ConnectionOptions;

const testConfig = {
  ...devConfig,
  url: process.env.DB_URI_TEST,
  dropSchema: true,
  migrationsRun: true,
} as ConnectionOptions;

const { NODE_ENV } = process.env;

const ormConfigs = {
  development: devConfig,
  production: prodConfig,
  test: testConfig,
};

export default ormConfigs[NODE_ENV];
