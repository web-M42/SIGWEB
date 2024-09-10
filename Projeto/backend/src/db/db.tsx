import pg  from 'pg';
import { Sequelize } from "sequelize";
import env from 'dotenv/config';


const DB = new Sequelize(
    process.env.DB_db as string,
    process.env.DB_user as string,
    process.env.DB_pass as string,
    {
        host: process.env.DB_host,
        port: Number(process.env.DB_port),
        dialect: 'postgres', 
        logging: false, 
    }
);


module.exports = DB