import express , {json}  from 'express';
import Conexion from './database/conexion';
import { CategoriaController } from './controllers/categoria.controller';

class App{

    public express: express.Application;
    private  conexion : Conexion | undefined
    categoriacontroller : CategoriaController

    constructor(){
        this.express = express();
        this.db();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(json())
    }

    routes(){
        this.express.get('/api' , this.categoriacontroller.router)
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