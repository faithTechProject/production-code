import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1729871342861 implements MigrationInterface {
    name = 'Tables1729871342861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "title" character varying, "subtitle" character varying, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflection" ("id" integer NOT NULL, "response" character varying NOT NULL, CONSTRAINT "PK_0436416fb00a0944412935c919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("name" character varying NOT NULL, "data" jsonb, CONSTRAINT "PK_68089f08b761289ebd87ecfa15f" PRIMARY KEY ("name"))`);

        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (0, 'Projects', 0, 'List of Ideas', '', 'Ideas list text.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (1, 'Projects', 1, 'Example Title 1', '', 'Example response text 1.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (2, 'Projects', 2, 'Example Title 2', '', 'Example response text 2.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (3, 'Projects', 3, 'Example Title 3', '', 'Example response text 3.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (4, 'Projects', 4, 'Proposal Templete', '', 'Proposal Template text.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (5, 'Projects', 5, 'Technology Use', 'Technology Audit', 'Sample technology text 1.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (6, 'Projects', 6, 'Technology Use', 'Technology Disparities', 'Sample technology text 2.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (7, 'Projects', 7, 'Technology Use', 'Emerging Technology', 'Sample technology text 13.')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "reflection"`);
        await queryRunner.query(`DROP TABLE "text_area_reflections"`);
    }

}
