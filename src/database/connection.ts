import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';

class connection{

    public connection: Sequelize

    //Constructor para conectar la aplicacion con la base de datos
    constructor(){

        dotenv.config();

        this.connection = new Sequelize({
            dialect: "postgres",
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            //port: 5432, 
            logging: false
        })
    }

}

export default connection;