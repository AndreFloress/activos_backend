import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Router , Response, Request } from "express";
import { UsuarioCreateDto } from "../dtos/usuario-create.dto";
import usuarioService from "../services/usuario.service";



export class UsuarioController{

    router = Router();

    constructor(){
        this.InitRouter();
    }

    InitRouter(){
        this.router.get('/usuario' , this.getList)
        this.router.get('/usuario/:id' , this.getUsuario)
        this.router.post('/usuario', this.create)
    }

    async getList(req : Request , res : Response) : Promise<Response>{
        const responsedto = await usuarioService.getList();
        return res.status(200).json(responsedto);
    }

    async getUsuario(req : Request , res : Response) : Promise<Response>{
        const {id} = req.params;
        const responsedto = await usuarioService.getUsuario(+id);
        return res.status(responsedto.code).json({
            message :  responsedto.message,
            data : responsedto.data
        })

    }

    async create(req : Request , res : Response) : Promise<Response>{
        const payload = req.body
        
        let usuariocreatedto = plainToClass(UsuarioCreateDto , payload)

        const errors = await validate(usuariocreatedto)

        if(errors.length > 0){
            console.log(errors);

            return res.status(400).json({
                "Validation-errors" : errors
            })
        }

        const responsedto = await usuarioService.create(usuariocreatedto);
        

        return res.status(responsedto.code).json(responsedto)
    }

}