import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729722470818 implements MigrationInterface {
    name = 'Migration1729722470818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "title" character varying, "subtitle" character varying, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflection" ("id" integer NOT NULL, "response" character varying NOT NULL, CONSTRAINT "PK_0436416fb00a0944412935c919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("name" character varying NOT NULL, "data" jsonb, CONSTRAINT "PK_68089f08b761289ebd87ecfa15f" PRIMARY KEY ("name"))`);
    
        //textarea
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (0, 'Projects', 0, '', '', 'Session ideas and project list')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (1, 'Projects', 1, 'Example title 1', 'Subtitle', 'Example response inside the text area 1.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (2, 'Projects', 2, 'Example title 2', 'Subtitle', 'Example response inside the text area 2.')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, page, entry_pos, title, subtitle, reply) VALUES (3, 'Projects', 3, 'Example title 3', 'Subtitle', 'Example response inside the text area 3.')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "reflection"`);
        await queryRunner.query(`DROP TABLE "text_area_reflections"`);
    }

}
