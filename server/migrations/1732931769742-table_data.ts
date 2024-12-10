import { MigrationInterface, QueryRunner } from "typeorm";

export class TableData1732931769742 implements MigrationInterface {
    name = 'TableData1732931769742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets" ("id" integer NOT NULL, "status" character varying NOT NULL, "row_index" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "assigned_to" character varying NOT NULL, "date_created" character varying NOT NULL, "date_due" character varying NOT NULL, "sprint" character varying NOT NULL, "percent_complete" character varying NOT NULL, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "input" jsonb NOT NULL, "tasks_rows" text array NOT NULL, "roles_columns" text array NOT NULL, "rci_input" jsonb NOT NULL, CONSTRAINT "PK_2285b10a630de03f95a9c727a33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis" ("id" integer NOT NULL, "page" character varying NOT NULL, "brainstorm_id" integer NOT NULL, "brainstorm_table_id" integer NOT NULL, "explanation" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_300795d51c57ef52911ed65851f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "story" ("id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "project_state" character varying, "challenges" character varying, "project_status" character varying, "project_summary" text, "project_link" character varying, "project_images" character varying, "project_fulfillment" character varying, "additional_info" text, "share_info" character varying, "reflection" text, CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`);

        /*------------
        -- Discover --
        ------------*/

        // Projects Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (0, 'Discover', 'Projects', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (1, 'Discover', 'Projects', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (2, 'Discover', 'Projects', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (3, 'Discover', 'Projects', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (4, 'Discover', 'Projects', 4, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (5, 'Discover', 'Projects', 5, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (6, 'Discover', 'Projects', 6, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (7, 'Discover', 'Projects', 7, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (8, 'Discover', 'Projects', 8, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (9, 'Discover', 'Projects', 9, '')`);

        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (0, 'Discover', 'Projects', 0, '[ {"partner": "", "needs": "", "project_idea": "" } ]', ARRAY[''], ARRAY[''], '[{}]')`);

        // Teams Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (10, 'Discover', 'Teams', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (11, 'Discover', 'Teams', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (12, 'Discover', 'Teams', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (13, 'Discover', 'Teams', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (14, 'Discover', 'Teams', 4, '')`);

        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (1, 'Discover', 'Teams', 0, '[ {"name": "", "skills": "", "areas_for_growth": "", "past_experiences": "" } ]', ARRAY['', ''], ARRAY['', ''], '[{"name": "Responsible", "row": 0, "col": 0}, {"name": "Responsible", "row": 0, "col": 1}, {"name": "Responsible", "row": 1, "col": 0}, {"name": "Responsible", "row": 1, "col": 1}]')`);   


        // Problems Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (15, 'Discover', 'Problems', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (16, 'Discover', 'Problems', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (17, 'Discover', 'Problems', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (18, 'Discover', 'Problems', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (19, 'Discover', 'Problems', 4, '')`);

        // Lament Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (20, 'Discover', 'Lament', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (21, 'Discover', 'Lament', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (22, 'Discover', 'Lament', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (23, 'Discover', 'Lament', 3, '')`);

        /*-----------
        -- Discern --
        -----------*/

        // Brainstorm Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (24, 'Discern', 'Brainstorm', 0, '')`);
        
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (2, 'Discern', 'Brainstorm', 0, '[ {"id": 0, "solution": ""} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (3, 'Discern', 'Brainstorm', 1, '[ {"id": 0, "solution": ""} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (4, 'Discern', 'Brainstorm', 2, '[ {"id": 0, "solution": ""} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (5, 'Discern', 'Brainstorm', 3, '[ {"id": 0, "solution": ""} ]', ARRAY[''], ARRAY[''], '[{}]')`);

        // Analysis Page Data
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (1, 'Discern', 0, 0, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (2, 'Discern', 0, 1, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (3, 'Discern', 0, 2, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (4, 'Discern', 0, 3, '', 'unassigned')`);
        
        // Timeline Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (25, 'Discern', 'Timeline', 0, '')`);

        /*-----------
        -- Develop --
        -----------*/

        // Co-Creation Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (26, 'Develop', 'CoCreation', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (27, 'Develop', 'CoCreation', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (28, 'Develop', 'CoCreation', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (39, 'Develop', 'CoCreation', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (30, 'Develop', 'CoCreation', 4, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (31, 'Develop', 'CoCreation', 5, '')`);

        // Tickets Page Data
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (1, 'not started', 0, '', '', '', '', '', '', '')`);

        /*---------------
        -- Demonstrate --
        ---------------*/

        // Conclusion Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (32, 'Demonstrate', 'Conclusion', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (33, 'Demonstrate', 'Conclusion', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (34, 'Demonstrate', 'Conclusion', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (35, 'Demonstrate', 'Conclusion', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (36, 'Demonstrate', 'Conclusion', 4, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (37, 'Demonstrate', 'Conclusion', 5, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (38, 'Demonstrate', 'Conclusion', 6, '')`);


        // Story Page Data
        await queryRunner.query(`INSERT INTO story(id, user_name, email, project_state, challenges, project_status, project_summary, project_link, project_images, project_fulfillment, additional_info, share_info, reflection) VALUES 
        (1, 'Alice Johnson', 'alice.johnson@example.com', 'Initial Planning', 'Difficulty in gathering initial resources and stakeholder commitment', 'In Progress', 'This project focuses on developing an AI-powered tool for personalized education.', 'https://example.com/project/ai-tool', 'https://example.com/images/ai-tool1.jpg, https://example.com/images/ai-tool2.jpg', 'The program provided initial funding and mentorship that helped kickstart the project.', 'Looking forward to a beta release within three months.', 'Yes', 'The process so far has been rewarding, especially in building a network of experts.')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "analysis"`);
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "text_area_reflections"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "story"`);
    }
}