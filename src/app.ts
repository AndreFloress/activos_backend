import express , {json}  from 'express';
import {conn} from './database/conexion';
import { CategoriaController } from './controllers/categoria.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { categoria } from './models/categoria';
import { usuario } from './models/usuarios';

class App{

    public express: express.Application;

        categoriacontroller : CategoriaController
        usuariocontroller : UsuarioController

    constructor(){
        this.express = express();
        this.db();
        this.middlewares();
        this.controller();
        this.routes();
    }

    middlewares(){
        this.express.use(json())
    }

    routes(){
        this.express.use('/api' , this.categoriacontroller.router)
        this.express.use('/api' , this.usuariocontroller.router)
    }

    db(){
        conn
        .sync()
        .then(() => {
            categoria.sync
            usuario.sync
            console.log('Database is connected')
        })
        .catch((err) => {
            console.log(`Erro`, err);
        });
        
    }


    listen(port: number){
        this.express.listen(port, () => console.log(`Server running in: http:localhost: ${port}`));
    }

    controller(){
        this.categoriacontroller = new CategoriaController();
        this.usuariocontroller = new UsuarioController();
        }

}

export default new App();