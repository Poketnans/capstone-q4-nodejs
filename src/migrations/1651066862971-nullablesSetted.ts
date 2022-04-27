import {MigrationInterface, QueryRunner} from "typeorm";

export class nullablesSetted1651066862971 implements MigrationInterface {
    name = 'nullablesSetted1651066862971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_31cceb779b3432dd8f096dc94c6"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "FK_31eb5db6c14e71ee432a28cd27f"`);
        await queryRunner.query(`ALTER TABLE "followers" ALTER COLUMN "id_follower" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "followers" ALTER COLUMN "id_following" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_2422ca0eff3004596ad4864b2cc"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_e90b2be67cd6efebbfe14178324"`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "id_user_owner" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "id_category" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b8bac60d33467ba048ac5fe67d3"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id_image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses_review" DROP CONSTRAINT "FK_09b8d3394da6eaf6a683d736e39"`);
        await queryRunner.query(`ALTER TABLE "courses_review" DROP CONSTRAINT "FK_acf8077307b386f1e40509d5a67"`);
        await queryRunner.query(`ALTER TABLE "courses_review" ALTER COLUMN "id_course" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses_review" ALTER COLUMN "id_user" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_5621adf6c7b59db0c307f58d886"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_ea1ef0023433eadabc1b30ab2a7"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_c5ff0731636ffb75f6575846a4f"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_8af7746de241987ca7ae6838536"`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_owner_course" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_mode" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_period" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_category" SET NOT NULL`);
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_period" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_mode" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "id_owner_course" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_8af7746de241987ca7ae6838536" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_c5ff0731636ffb75f6575846a4f" FOREIGN KEY ("id_period") REFERENCES "courses_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_ea1ef0023433eadabc1b30ab2a7" FOREIGN KEY ("id_mode") REFERENCES "courses_modes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_5621adf6c7b59db0c307f58d886" FOREIGN KEY ("id_owner_course") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_review" ALTER COLUMN "id_user" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses_review" ALTER COLUMN "id_course" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses_review" ADD CONSTRAINT "FK_acf8077307b386f1e40509d5a67" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_review" ADD CONSTRAINT "FK_09b8d3394da6eaf6a683d736e39" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id_image" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b8bac60d33467ba048ac5fe67d3" FOREIGN KEY ("id_image") REFERENCES "images_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "id_category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "id_user_owner" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_e90b2be67cd6efebbfe14178324" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_2422ca0eff3004596ad4864b2cc" FOREIGN KEY ("id_user_owner") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ALTER COLUMN "id_following" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "followers" ALTER COLUMN "id_follower" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_31eb5db6c14e71ee432a28cd27f" FOREIGN KEY ("id_following") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "FK_31cceb779b3432dd8f096dc94c6" FOREIGN KEY ("id_follower") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
