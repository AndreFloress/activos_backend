import {Sequelize} from "sequelize-typescript";
import * as dotenv from 'dotenv'
//import { Categoria } from "../models/categoria";

class Conexion {

    public conexion : Sequelize

    constructor(){
        dotenv.config();

        this.conexion = new Sequelize({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            logging : false,

        })

    }

}

export default Conexion;