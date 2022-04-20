import {MigrationInterface, QueryRunner} from "typeorm";

export class creatingTables1650461587163 implements MigrationInterface {
    name = 'creatingTables1650461587163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_modes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(10) NOT NULL, CONSTRAINT "PK_7b15c3a14420f35945bdb207a0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_period" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(10) NOT NULL, CONSTRAINT "PK_eeff633abeb875bf9343d676b18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "followers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "id_follower" uuid, "id_following" uuid, CONSTRAINT "PK_c90cfc5b18edd29bd15ba95c1a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mimetype" character varying NOT NULL, "name" character varying NOT NULL, "binary" character varying NOT NULL, CONSTRAINT "PK_438c8cc33ba968d15d786873f19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" character varying(180) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "starts_at" TIMESTAMP NOT NULL, "ends_at" TIMESTAMP NOT NULL, "id_user_owner" uuid, "id_category" uuid, CONSTRAINT "UQ_2187088ab5ef2a918473cb99007" UNIQUE ("name"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "employed" boolean NOT NULL, "id_image" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_b8bac60d33467ba048ac5fe67d" UNIQUE ("id_image"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_review" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(280) NOT NULL, "rating" integer NOT NULL, "hash_user_course" character varying NOT NULL, "id_course" uuid, "id_user" uuid, CONSTRAINT "UQ_ba94afb0183637d802c266b2726" UNIQUE ("hash_user_course"), CONSTRAINT "PK_ae93ab6fd9abc07022a87bfee9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "address" character varying NOT NULL, "starts_at" TIMESTAMP NOT NULL, "ends_at" TIMESTAMP NOT NULL, "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_owner_course" uuid, "id_mode" uuid, "id_period" uuid, "id_category" uuid, CONSTRAINT "UQ_a01a7f0e38c6f16024d16058ab5" UNIQUE ("title"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_projects" ("id_user" uuid NOT NULL, "id_project" uuid NOT NULL, CONSTRAINT "PK_46d8c0ebe6d9bd0f9eeb65acd05" PRIMARY KEY ("id_user", "id_project"))`);
        await queryRunner.query(`CREATE INDEX "IDX_171520892e7e24483379170aa7" ON "user_projects" ("id_user") `);
        await queryRunner.query(`CREATE INDEX "IDX_0ee3d0d7ad84f5f72129313254" ON "user_projects" ("id_project") `);
        await queryRunner.query(`CREATE TABLE "users_courses" ("id_user" uuid NOT NULL, "id_course" uuid NOT NULL, CONSTRAINT "PK_b4d1735a0f02aea3093942ee2da" PRIMARY KEY ("id_user", "id_course"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fbfac08e73dc8b81e642e11a51" ON "users_courses" ("id_user") `);
        await queryRunner.query(`CREATE INDEX "IDX_1f6d8a7fb3bca40ec95f7f5a05" ON "users_courses" ("id_course") `);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_31cceb779b3432dd8f096dc94c6" FOREIGN KEY ("id_follower") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_31eb5db6c14e71ee432a28cd27f" FOREIGN KEY ("id_following") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_2422ca0eff3004596ad4864b2cc" FOREIGN KEY ("id_user_owner") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_e90b2be67cd6efebbfe14178324" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b8bac60d33467ba048ac5fe67d3" FOREIGN KEY ("id_image") REFERENCES "images_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_review" ADD CONSTRAINT "FK_09b8d3394da6eaf6a683d736e39" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_review" ADD CONSTRAINT "FK_acf8077307b386f1e40509d5a67" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_5621adf6c7b59db0c307f58d886" FOREIGN KEY ("id_owner_course") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_ea1ef0023433eadabc1b30ab2a7" FOREIGN KEY ("id_mode") REFERENCES "courses_modes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_c5ff0731636ffb75f6575846a4f" FOREIGN KEY ("id_period") REFERENCES "courses_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_8af7746de241987ca7ae6838536" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_projects" ADD CONSTRAINT "FK_171520892e7e24483379170aa77" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_projects" ADD CONSTRAINT "FK_0ee3d0d7ad84f5f721293132546" FOREIGN KEY ("id_project") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_courses" ADD CONSTRAINT "FK_fbfac08e73dc8b81e642e11a514" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_courses" ADD CONSTRAINT "FK_1f6d8a7fb3bca40ec95f7f5a05e" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_courses" DROP CONSTRAINT "FK_1f6d8a7fb3bca40ec95f7f5a05e"`);
        await queryRunner.query(`ALTER TABLE "users_courses" DROP CONSTRAINT "FK_fbfac08e73dc8b81e642e11a514"`);
        await queryRunner.query(`ALTER TABLE "user_projects" DROP CONSTRAINT "FK_0ee3d0d7ad84f5f721293132546"`);
        await queryRunner.query(`ALTER TABLE "user_projects" DROP CONSTRAINT "FK_171520892e7e24483379170aa77"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_8af7746de241987ca7ae6838536"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_c5ff0731636ffb75f6575846a4f"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_ea1ef0023433eadabc1b30ab2a7"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_5621adf6c7b59db0c307f58d886"`);
        await queryRunner.query(`ALTER TABLE "courses_review" DROP CONSTRAINT "FK_acf8077307b386f1e40509d5a67"`);
        await queryRunner.query(`ALTER TABLE "courses_review" DROP CONSTRAINT "FK_09b8d3394da6eaf6a683d736e39"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b8bac60d33467ba048ac5fe67d3"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_e90b2be67cd6efebbfe14178324"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_2422ca0eff3004596ad4864b2cc"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_31eb5db6c14e71ee432a28cd27f"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_31cceb779b3432dd8f096dc94c6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1f6d8a7fb3bca40ec95f7f5a05"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fbfac08e73dc8b81e642e11a51"`);
        await queryRunner.query(`DROP TABLE "users_courses"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0ee3d0d7ad84f5f72129313254"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_171520892e7e24483379170aa7"`);
        await queryRunner.query(`DROP TABLE "user_projects"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "courses_review"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "images_profile"`);
        await queryRunner.query(`DROP TABLE "followers"`);
        await queryRunner.query(`DROP TABLE "courses_period"`);
        await queryRunner.query(`DROP TABLE "courses_modes"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
