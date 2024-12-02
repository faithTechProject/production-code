import { MigrationInterface, QueryRunner } from "typeorm";

<<<<<<<< HEAD:server/migrations/1732931769742-table_data.ts
export class TableData1732931769742 implements MigrationInterface {
    name = 'TableData1732931769742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets" ("id" integer NOT NULL, "status" character varying NOT NULL, "row_index" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "assigned_to" character varying NOT NULL, "date_created" character varying NOT NULL, "date_due" character varying NOT NULL, "sprint" character varying NOT NULL, "percent_complete" character varying NOT NULL, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflection" ("id" integer NOT NULL, "name" character varying NOT NULL, "response" character varying NOT NULL, CONSTRAINT "PK_0436416fb00a0944412935c919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "input" jsonb NOT NULL, "tasks_rows" text array NOT NULL, "roles_columns" text array NOT NULL, "rci_input" jsonb NOT NULL, CONSTRAINT "PK_2285b10a630de03f95a9c727a33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "co_creation" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_95f2a5d8ad2f5bea45c6f87dced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis" ("id" integer NOT NULL, "page_type" character varying NOT NULL, "page_name" character varying NOT NULL, "solution" character varying NOT NULL, "explanation" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_300795d51c57ef52911ed65851f" PRIMARY KEY ("id"))`);
========
export class TableData1730338934546 implements MigrationInterface {
    name = 'TableData1730338934546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "co_creation" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_95f2a5d8ad2f5bea45c6f87dced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflection" ("id" integer NOT NULL, "response" character varying NOT NULL, CONSTRAINT "PK_0436416fb00a0944412935c919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "input" jsonb NOT NULL, "tasks_rows" text array NOT NULL, "roles_columns" text array NOT NULL, "rci_input" jsonb NOT NULL, CONSTRAINT "PK_2285b10a630de03f95a9c727a33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" integer NOT NULL, "status" character varying NOT NULL, "row_index" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "assigned_to" character varying NOT NULL, "date_created" character varying NOT NULL, "date_due" character varying NOT NULL, "sprint" character varying NOT NULL, "percent_complete" character varying NOT NULL, "is_open" boolean NOT NULL, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
>>>>>>>> d480570f035c2ce668c55936f949d2130d5ea546:server/migrations/1730338934546-table_data.ts
        
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

        // Discover: Lament Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (18, 'Discover', 'Lament', 0, 'Lament', '', '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (19, 'Discover', 'Lament', 1, 'Reflection Questions', 'Perspective Change', '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (20, 'Discover', 'Lament', 2, 'Reflection Questions', 'Presence Of God', '')`);

        // Discern: Timeline
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (21, 'Discern', 'Timeline', 0, 'Communication Plan', '', '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (22, 'category', 'page', 0, 'Communication Plan', '', '')`);
        
        // Reflection Table
        //await queryRunner.query(`INSERT INTO reflection (id, response) VALUES (0, 'Test Data')`);

        //Matrix:
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (0, 'Discover', 'Data', 0, '[ {"name": "1", "skills": "2", "areas_for_growth": "3", "past_experiences": "4" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (1, 'Discover', 'Projects', 0, '[ {"partner": "1", "needs": "2", "project_idea": "3" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (2, 'Discover', 'Teams', 0, '[ {"name": "1", "skills": "2", "areas_for_growth": "3", "past_experiences": "4" } ]', ARRAY['row 1', 'row 2'], ARRAY['column 1', 'column 2'], '[{"name": "Consulted", "row": 0, "col": 0}, {"name": "Responsible", "row": 0, "col": 1}, {"name": "Informed", "row": 1, "col": 0}, {"name": "Accountable", "row": 1, "col": 1}]')`);   
        
        // Discern: Brainstorm
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, title, subtitle, reply) VALUES (23, 'Discern', 'Brainstorm', 0, 'What Might Jesus', '', '')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (3, 'Discern', 'Brainstorm', 0, '[ {"solution": "1"}, {"solution": "5"}, {"solution": "7"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (4, 'Discern', 'Brainstorm', 1, '[ {"solution": "2"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (5, 'Discern', 'Brainstorm', 2, '[ {"solution": "3"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (6, 'Discern', 'Brainstorm', 3, '[ {"solution": "3"} ]', ARRAY[''], ARRAY[''], '[{}]')`);

        //Develop: co-creation page data
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (0, 'Develop', 'co_creation',  'This is the co_creation page 0')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (1, 'Develop', 'co_creation',  'This is the co_creation page 1')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (2, 'Develop', 'co_creation',  'This is the co_creation page 2')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (3, 'Develop', 'co_creation',  'This is the co_creation page 3')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (4, 'Develop', 'co_creation',  'This is the co_creation page 4')`);

        // Develop: Tickets
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (1, 'not started', 0, 'Database', 'Previous page database', 'Kevin Ford', '11/12/2024', '11/17/2024', 'Sprint #5', '100%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (2, 'not started', 1, 'Example2', 'Example2 description', 'Jason', '11/10/2024', '11/16/2024', 'Sprint #6', '20%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (3, 'not started', 2, 'Example3', 'Example3 description', 'Max', '11/13/2024', '11/23/2024', 'Sprint #7', '80%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (4, 'in progress', 0, 'Example4', 'Example4 description', 'Kathy', '11/09/2024', '11/14/2024', 'Sprint #4', '90%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (5, 'in progress', 1, 'Example5', 'Example5 description', 'Jacob', '11/01/2024', '11/15/2024', 'Sprint #3', '23%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (6, 'completed', 0, 'Example6', 'Example6 description', 'Martin', '11/05/2024', '11/20/2024', 'Sprint #8', '46%')`);

<<<<<<<< HEAD:server/migrations/1732931769742-table_data.ts
        //Develop: co-creation page data
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (0, 'Develop', 'co_creation',  'This is the co_creation page 0')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (1, 'Develop', 'co_creation',  'This is the co_creation page 1')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (2, 'Develop', 'co_creation',  'This is the co_creation page 2')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (3, 'Develop', 'co_creation',  'This is the co_creation page 3')`);
        await queryRunner.query(`INSERT INTO co_creation(id, category, page, data) VALUES (4, 'Develop', 'co_creation',  'This is the co_creation page 4')`);
    
        await queryRunner.query(`INSERT INTO analysis (id, page_type, page_name, solution, explanation, category) VALUES (0, 'Discern', 'Analysis','test solution', 'test explanation', 'unassigned')`)
========
>>>>>>>> d480570f035c2ce668c55936f949d2130d5ea546:server/migrations/1730338934546-table_data.ts
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
<<<<<<<< HEAD:server/migrations/1732931769742-table_data.ts
        await queryRunner.query(`DROP TABLE "analysis"`);
        await queryRunner.query(`DROP TABLE "co_creation"`);
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "reflection"`);
========
        await queryRunner.query(`DROP TABLE "matrix"`);
        await queryRunner.query(`DROP TABLE "reflection"`);
        await queryRunner.query(`DROP TABLE "co_creation"`);
>>>>>>>> d480570f035c2ce668c55936f949d2130d5ea546:server/migrations/1730338934546-table_data.ts
        await queryRunner.query(`DROP TABLE "text_area_reflections"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
    }

<<<<<<<< HEAD:server/migrations/1732931769742-table_data.ts
}
========
}
>>>>>>>> d480570f035c2ce668c55936f949d2130d5ea546:server/migrations/1730338934546-table_data.ts
