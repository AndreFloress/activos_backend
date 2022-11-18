import express  from 'express';
import Conexion from './database/conexion';
class App{

    public express: express.Application;
    private  conexion : Conexion | undefined

    constructor(){
        this.express = express();
        this.db();
    }

    db(){
        this.conexion = new Conexion();
        this.conexion.conexion
        .sync()
        .then(() => {
            console.log('Database is connected')
        })
        .catch((err) => {
            console.log(`Erro`, err);
        });
        
    }

    listen(port: number){
        this.express.listen(port, () => console.log(`Server running in: http:localhost: ${port}`));
    }
}

export default new App();