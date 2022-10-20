import express  from 'express';
import connection from './database/connection';
import * as dotenv from 'dotenv';
class App{

    public express: express.Application;
    private connection: connection | undefined;

    //Constructor para servidor web
    constructor(){
        this.express = express();
        this.db();
    }

    db(){
        this.connection = new connection ();
        this.connection.connection.sync().then(() =>{
            console.log(`Database is connected`);
        })
        .catch((err) => {
            console.log(`Erro`, err);
        });
    }

    //Listen para anidar main.ts y correlo en app.ts
    listen(port: number){
        this.express.listen(port, () => console.log(`Server running in: http:localhost: ${port}`));
    }
}

export default new App();