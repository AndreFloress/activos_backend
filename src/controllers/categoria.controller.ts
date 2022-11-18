import { Router , Request , Response, response } from "express";


export class CategoriaController{

    router = Router();

    constructor(){
        this.InitRouter();
    }

    //Funcion rutas (Lo que ele usuario utilizara para hacer las peticiones desde el api)
    InitRouter(){
        this.router.get('/categoria', this.getList)
        this.router.get('/categoria/:id', this.getCategoria)
        this.router.post('/categoria' , this.create)
        this.router.get('/categoria/:id' , this.update)
        this.router.get('/categoria/:id' , this.delete)
    }

    //Funciones de Lista
    async getList(req : Request , res : Response) : Promise<Response>{
        return 
    }

    async getCategoria(req : Request , res : Response) : Promise<Response>{
        return
    }

    async create(req : Request , res : Response) : Promise<Response>{
        return 
    }

    async update(req : Request , res : Response) : Promise<Response>{
        return 
    }

    async delete(req : Request , res : Response) : Promise<Response>{
        return
    }

}