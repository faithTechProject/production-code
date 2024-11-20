import { MigrationInterface, QueryRunner } from "typeorm";

export class CoCreationTable1731944013557 implements MigrationInterface {
    name = 'CoCreationTable1731944013557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "co_creation" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_95f2a5d8ad2f5bea45c6f87dced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflection" ("id" integer NOT NULL, "name" character varying NOT NULL, "response" character varying NOT NULL, CONSTRAINT "PK_0436416fb00a0944412935c919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "input" jsonb NOT NULL, "tasks_rows" text array NOT NULL, "roles_columns" text array NOT NULL, "rci_input" jsonb NOT NULL, CONSTRAINT "PK_2285b10a630de03f95a9c727a33" PRIMARY KEY ("id"))`);
        
          // Discover: Projects Page Data
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (0, 'Discover', 'Projects', 0, 'List of Ideas', '', 'Ideas list text.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (1, 'Discover', 'Projects', 1, 'Example Title 1', '', 'Example response text 1.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (2, 'Discover', 'Projects', 2, 'Example Title 2', '', 'Example response text 2.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (3, 'Discover', 'Projects', 3, 'Example Title 3', '', 'Example response text 3.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (4, 'Discover', 'Projects', 4, 'Proposal Templete', '', 'Proposal Template text.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (5, 'Discover', 'Projects', 5, 'Technology Use', 'Technology Audit', 'Sample technology text 1.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (6, 'Discover', 'Projects', 6, 'Technology Use', 'Technology Disparities', 'Sample technology text 2.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (7, 'Discover', 'Projects', 7, 'Technology Use', 'Emerging Technology', 'Sample technology text 13.')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (100, 'Discern', 'Timeline', 0, 'List of Ideas', '', 'Ideas list text.')`);
          
  
  
          // Discover: Teams Page Data
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (8, 'Discover', 'Teams', 0, 'Roles', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (9, 'Discover', 'Teams', 1, 'Values', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (10, 'Discover', 'Teams', 2, 'Reflection Questions', 'Obedient', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (11, 'Discover', 'Teams', 3, 'Reflection Questions', 'Gifts', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (12, 'Discover', 'Teams', 4, 'Reflection Questions', 'Opportunities', '')`);
  
          // Discover: Problems Page Data
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (13, 'Discover', 'Problems', 0, 'Identify', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (14, 'Discover', 'Problems', 1, 'Describe', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (15, 'Discover', 'Problems', 2, 'Problem', 'Group1', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (16, 'Discover', 'Problems', 3, 'Problem', 'Group2', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (17, 'Discover', 'Problems', 4, 'Problem', 'Group3', '')`);
  
          // Discover: Lement Page Data
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (18, 'Discover', 'Lament', 0, 'Lament', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (19, 'Discover', 'Lament', 1, 'Reflection Questions', 'Perspective Change', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (20, 'Discover', 'Lament', 2, 'Reflection Questions', 'Presence Of God', '')`);
  
          // Discern: Timeline
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (21, 'Discern', 'Timeline', 0, 'Communication Plan', '', '')`);
          await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (22, 'category', 'page', 0, 'Communication Plan', '', '')`);
          
          // Reflection Table
          //await queryRunner.query(`INSERT INTO reflection (id, response) VALUES (101, 'Test Data')`);
  
          //Matrix:
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (0, 'Discover', 'Data', 0, '[ {"name": "1", "skills": "2", "areas_for_growth": "3", "past_experiences": "4" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (1, 'Discover', 'Projects', 0, '[ {"partner": "1", "needs": "2", "project_idea": "3" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (2, 'Discover', 'Teams', 0, '[ {"name": "1", "skills": "2", "areas_for_growth": "3", "past_experiences": "4" } ]', ARRAY['row 1', 'row 2'], ARRAY['column 1', 'column 2'], '[{"name": "Consulted", "row": 0, "col": 0}, {"name": "Responsible", "row": 0, "col": 1}, {"name": "Informed", "row": 1, "col": 0}, {"name": "Accountable", "row": 1, "col": 1}]')`);   
          
          // Discern: Brainstorm
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (3, 'Discern', 'Brainstorm', 0, '[ {"solution": "1"}, {"solution": "5"}, {"solution": "7"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (4, 'Discern', 'Brainstorm', 1, '[ {"solution": "2"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
          await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (5, 'Discern', 'Brainstorm', 2, '[ {"solution": "3"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
  
          //Develop: co-creation page data
          await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (0, 'Develop', 'co_creation',  'This is the co_creation page 0')`);
          await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (1, 'Develop', 'co_creation',  'This is the co_creation page 1')`);
          await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (2, 'Develop', 'co_creation',  'This is the co_creation page 2')`);
          await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (3, 'Develop', 'co_creation',  'This is the co_creation page 3')`);
          await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (4, 'Develop', 'co_creation',  'This is the co_creation page 4')`);

    }



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "reflection"`);
        await queryRunner.query(`DROP TABLE "co_creation"`);
        await queryRunner.query(`DROP TABLE "text_area_reflections"`);
    }

}