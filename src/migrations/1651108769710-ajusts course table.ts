import {MigrationInterface, QueryRunner} from "typeorm";

export class ajustsCourseTable1651108769710 implements MigrationInterface {
    name = 'ajustsCourseTable1651108769710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" ADD "certificate" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "certificate"`);
    }

}
