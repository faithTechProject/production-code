import { config } from "dotenv";
import { DataSource } from "typeorm";

config();

//const configService = new ConfigService();
 //create a typeorm DataSource object to store the database connection.
export default new DataSource(
    {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'faithtech_user',
    password: 'faithtech_password',
    database: 'faithtech_create',
    migrations: ['migrations/**'],
    synchronize: false,
    entities: ["dist/**/*.entity{.ts,.js}"], // postgres database tables.
})