require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

const DB = process.env.DB_USER;
const Password = process.env.DB_DB_PASSWORD
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: Password,
    database: DB,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
