import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development' ? true : false ,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
