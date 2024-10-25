import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "dotenv";
import { Matrix } from "src/matrix/matrix.entity";
import { Reflection } from "src/reflection/reflection.entity";
import { DataSource } from "typeorm";

config();

const configService = new ConfigService();

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