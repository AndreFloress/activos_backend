import * as  Sequelize  from "sequelize-typescript";
import { conn } from "../database/conexion";

export interface UsuarioAddModel{
    id: number,
    user:string,
    password: string,
    rol: string
}

export interface UsuarioModel extends Sequelize.Model<UsuarioModel,UsuarioAddModel>{
    id: number,
    user:string,
    password: string,
    rol: string
}

export const usuario = conn.define<UsuarioModel , UsuarioAddModel>('usuarios' , {
    id : {
        type : Sequelize.DataType.INTEGER,
        primaryKey : true,
        autoIncrement : true,

    },
    user : {
        type : Sequelize.DataType.STRING(15),
        unique : false,

    },
    password : {
        type : Sequelize.DataType.STRING(20),
        unique : false,
    },
    rol : {
        type : Sequelize.DataType.STRING(30),
        unique : false,

    }
});

