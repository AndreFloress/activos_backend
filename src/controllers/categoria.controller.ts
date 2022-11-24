import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Router , Request , Response} from "express";
import { CategoriaCreate } from "../dtos/categoria-create.dtos";
import { CategoriaUpdate } from "../dtos/categoria-update.dtos";
import categoriaService from "../services/categoria.service";


export class CategoriaController{
    
    router = Router();

    constructor(){
        this.InitRouter();
    }

    //Funcion rutas (Lo que ele usuario utilizara para hacer las peticiones desde el api)
    InitRouter(){
        this.router.get('/categorias', this.getList)
        this.router.get('/categorias/:id', this.getCategoria)
        this.router.post('/categorias' , this.create)
        this.router.get('/categorias/:id' , this.update)
        this.router.get('/categorias/:id' , this.delete)
    }

    //Funciones de Lista
    async getList(req : Request , res : Response) : Promise<Response>{
        const categoria = await categoriaService.getList();
        return res.json(categoria)
    }

    async getCategoria(req : Request , res : Response) : Promise<Response>{
        const {id} = req.params;
        const categoria = await categoriaService.getCategoria(+id);
        return res.json(categoria)

    }

    async create(req : Request , res : Response) : Promise<Response>{
        const payload = req.body
        
        let categoriacreatedto = plainToClass(CategoriaCreate , payload)

        const errors = await validate(categoriacreatedto)

        if(errors.length > 0){
            console.log(errors);

            return res.status(400).json({
                "Validation-errors" : errors
            })
        }

        return res.json(await categoriaService.create(categoriacreatedto));
    }

    async update(req : Request , res : Response) : Promise<Response>{
        const { id } = req.params;
        const payload = req.body;

        let categoriaupdatedto = plainToClass(CategoriaUpdate, payload)

        const errors = await validate(categoriaupdatedto);

        if(errors.length > 0){
            console.log(errors);
            
            return res.status(400).json({
                "Validation-errors" : errors
            })
        }

        let categoria = await categoriaService.update(payload, +id);

        console.log(categoria)
        
        return res.json(categoria); 
    }

    async delete(req : Request , res : Response) : Promise<Response>{
        const {id} = req.params
        
        await categoriaService.delete(+id)

        return res.status(204).json();
    }

}