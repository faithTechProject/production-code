import { MigrationInterface, QueryRunner } from "typeorm";

export class TableData1732931769742 implements MigrationInterface {
    name = 'TableData1732931769742'
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tickets" ("id" integer NOT NULL, "status" character varying NOT NULL, "row_index" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "assigned_to" character varying NOT NULL, "date_created" character varying NOT NULL, "date_due" character varying NOT NULL, "sprint" character varying NOT NULL, "percent_complete" character varying NOT NULL, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "text_area_reflections" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "reply" character varying NOT NULL, CONSTRAINT "PK_2d40f7278c8e780efa9c2177a20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matrix" ("id" integer NOT NULL, "category" character varying NOT NULL, "page" character varying NOT NULL, "entry_pos" integer NOT NULL, "input" jsonb NOT NULL, "tasks_rows" text array NOT NULL, "roles_columns" text array NOT NULL, "rci_input" jsonb NOT NULL, CONSTRAINT "PK_2285b10a630de03f95a9c727a33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "analysis" ("id" integer NOT NULL, "page" character varying NOT NULL, "brainstorm_id" integer NOT NULL, "brainstorm_table_id" integer NOT NULL, "explanation" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_300795d51c57ef52911ed65851f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "story" ("id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "project_state" character varying, "challenges" character varying, "project_status" character varying, "project_summary" text, "project_link" character varying, "project_images" character varying, "project_fulfillment" character varying, "additional_info" text, "share_info" character varying, "reflection" text, CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`);

        // Discover: Projects Page Data
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

      // Discover: Teams Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (10, 'Discover', 'Teams', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (11, 'Discover', 'Teams', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (12, 'Discover', 'Teams', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (13, 'Discover', 'Teams', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (14, 'Discover', 'Teams', 4, '')`);

        // Discover: Problems Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (15, 'Discover', 'Problems', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (16, 'Discover', 'Problems', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (17, 'Discover', 'Problems', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (18, 'Discover', 'Problems', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (19, 'Discover', 'Problems', 4, '')`);

        // Discover: Lament Page Data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (20, 'Discover', 'Lament', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (21, 'Discover', 'Lament', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (22, 'Discover', 'Lament', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (23, 'Discover', 'Lament', 3, '')`);

        // Discern: Timeline
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (24, 'Discern', 'Timeline', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (25, 'category', 'page', 0, '')`);

        //Matrix:
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (0, 'Discover', 'Data', 0, '[ {"name": "1", "skills": "2", "areas_for_growth": "3", "past_experiences": "4" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (1, 'Discover', 'Projects', 0, '[ {"partner": "1", "needs": "2", "project_idea": "3" } ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (2, 'Discover', 'Teams', 0, '[ {"name": "1", "skills": "2", "past_experiences": "4", "areas_for_growth": "3" } ]', ARRAY['row 1', 'row 2'], ARRAY['column 1', 'column 2'], '[{"name": "Consulted", "row": 0, "col": 0}, {"name": "Responsible", "row": 0, "col": 1}, {"name": "Informed", "row": 1, "col": 0}, {"name": "Accountable", "row": 1, "col": 1}]')`);   
        
        // Discern: Analysis
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (1, 'Discern', 0, 0, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (2, 'Discern', 1, 0, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (3, 'Discern', 2, 0, '', 'unassigned')`);

        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (4, 'Discern', 0, 1, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (5, 'Discern', 1, 1, '', 'unassigned')`);

        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (6, 'Discern', 0, 2, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (7, 'Discern', 1, 2, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (8, 'Discern', 2, 2, '', 'unassigned')`);

        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (9, 'Discern', 0, 3, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (10, 'Discern', 1, 3, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (11, 'Discern', 2, 3, '', 'unassigned')`);
        await queryRunner.query(`INSERT INTO analysis (id, page, brainstorm_id, brainstorm_table_id, explanation, category) VALUES (12, 'Discern', 3, 3, '', 'unassigned')`);
        
        // Discern: Brainstorm
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (26, 'Discern', 'Brainstorm', 0, '')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (3, 'Discern', 'Brainstorm', 0, '[ {"id": 0, "solution": "1 text one"}, {"id": 1, "solution": "1 text two"}, {"id": 2, "solution": "1 text three"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (4, 'Discern', 'Brainstorm', 1, '[ {"id": 0, "solution": "2 text one"}, {"id": 1, "solution": "2 text two"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (5, 'Discern', 'Brainstorm', 2, '[ {"id": 0, "solution": "3 text one"}, {"id": 1, "solution": "3 text two"}, {"id": 2, "solution": "3 text three"} ]', ARRAY[''], ARRAY[''], '[{}]')`);
        await queryRunner.query(`INSERT INTO matrix (id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input) VALUES (6, 'Discern', 'Brainstorm', 3, '[ {"id": 0, "solution": "4 text one"}, {"id": 1, "solution": "4 text two"}, {"id": 2, "solution": "4 text three"}, {"id": 3, "solution": "4 text four"} ]', ARRAY[''], ARRAY[''], '[{}]')`);

        //Develop: co-creation page data
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (27, 'Develop', 'CoCreation', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (28, 'Develop', 'CoCreation', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (29, 'Develop', 'CoCreation', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (30, 'Develop', 'CoCreation', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (31, 'Develop', 'CoCreation', 4, '')`);

        // Develop: Tickets
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (1, 'not started', 0, 'Database', 'Previous page database', 'Kevin Ford', '11/12/2024', '11/17/2024', 'Sprint #5', '100%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (2, 'not started', 1, 'Example2', 'Example2 description', 'Jason', '11/10/2024', '11/16/2024', 'Sprint #6', '20%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (3, 'not started', 2, 'Example3', 'Example3 description', 'Max', '11/13/2024', '11/23/2024', 'Sprint #7', '80%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (4, 'in progress', 0, 'Example4', 'Example4 description', 'Kathy', '11/09/2024', '11/14/2024', 'Sprint #4', '90%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (5, 'in progress', 1, 'Example5', 'Example5 description', 'Jacob', '11/01/2024', '11/15/2024', 'Sprint #3', '23%')`);
        await queryRunner.query(`INSERT INTO tickets (id, status, row_index, title, description, assigned_to, date_created, date_due, sprint, percent_complete) VALUES (6, 'completed', 0, 'Example6', 'Example6 description', 'Martin', '11/05/2024', '11/20/2024', 'Sprint #8', '46%')`);

        // Demonstrate: Measure
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (100, 'Demonstrate', 'Measure', 0, '0')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (101, 'Demonstrate', 'Measure', 1, '1')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (102, 'Demonstrate', 'Measure', 2, '2')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (103, 'Demonstrate', 'Measure', 3, '3')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (104, 'Demonstrate', 'Measure', 4, '4')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (105, 'Demonstrate', 'Measure', 5, '5')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (106, 'Demonstrate', 'Measure', 6, '6')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (107, 'Demonstrate', 'Measure', 7, '7')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (108, 'Demonstrate', 'Measure', 8, '8')`);

        //Demonstrate: conclusion
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (32, 'Demonstrate', 'Conclusion', 0, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (33, 'Demonstrate', 'Conclusion', 1, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (34, 'Demonstrate', 'Conclusion', 2, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (35, 'Demonstrate', 'Conclusion', 3, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (36, 'Demonstrate', 'Conclusion', 4, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (37, 'Demonstrate', 'Conclusion', 5, '')`);
        await queryRunner.query(`INSERT INTO text_area_reflections (id, category, page, entry_pos, reply) VALUES (38, 'Demonstrate', 'Conclusion', 6, '')`);


        //Demonstrate: story page
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