import { createConnection, getConnection } from 'typeorm';
import ormconfig from '../../db';
import { ITestConnection } from './interfaces';

class connection {
  static connect = async () => {
    await createConnection(ormconfig);
  };

  static create = async () => {
    await this.connect();
    // await this.dropTables();
    // await this.close();
    // await this.connect();
  };

  static close = async () => {
    await getConnection().close();
  };

  static clear = async () => {
    const conn = getConnection();
    const entities = conn.entityMetadatas;

    entities.forEach(async (entity) => {
      const repo = conn.getRepository(entity.name);
      await repo.query(`DELETE FROM ${entity.tableName}`);
    });
  };

  static dropTables = async () => {
    const conn = getConnection();
    const entities = conn.entityMetadatas;

    entities.forEach(async (entity) => {
      const repo = conn.getRepository(entity.name);
      await repo.query(`DROP TABLE ${entity.tableName}`);
    });
    await conn.query(`DROP TABLE IF EXISTS "migrations"`);
    await conn.query(`DROP TABLE IF EXISTS "typeorm_metadata"`);
  };
}

export default connection as ITestConnection;
