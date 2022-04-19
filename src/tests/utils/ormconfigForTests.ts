import { ConnectionOptions } from 'typeorm';
import ormconfig from '../../db/ormconfig';

const ormconfigForTests = {
  ...ormconfig,
  dropSchema: true,
  migrationsRun: true,
  database: `${ormconfig.database}_test`,
  cli: {
    entitiesDir: '../../entities',
    migrationsDir: '../../migrations',
  },
} as ConnectionOptions;

export default ormconfigForTests;
