import * as Sequelize from "sequelize-typescript"
import {conn} from "../database/conexion"


//Se crea la tabla en la base de datos 
export interface CategoriaAddModel{
    id : number,
    name : string
}

//Interface donde mapear la indromacion desde Insomnia o un api
export interface CategoriaModel extends Sequelize.Model<CategoriaModel , CategoriaAddModel>{
    id : number,
    name : string ,
    createdAt : Date ,
    updatedAt : Date 
}

export const categoria = conn.define<CategoriaModel , CategoriaAddModel>('categorias' , {
    id : {
        type : Sequelize.DataType.INTEGER,
        primaryKey : true,
        autoIncrement : true,

    },
    name : {
        type : Sequelize.DataType.STRING(50),
        unique : true
    }
})