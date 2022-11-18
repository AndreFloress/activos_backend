import { Model , Table , DataType , Column } from "sequelize-typescript"


//Se tiene que extender a Model para que pueda crear la tabla en postgre
@Table({
    tableName : 'categoria'
})
export class Categoria extends Model{
    
    @Column({
        type : DataType.INTEGER,
        primaryKey : true, 
        autoIncrement : true,
    })
    public id : number ;

    @Column({
        type : DataType.STRING(50),
        allowNull : false,
        unique : true
    })
    public name : string

}