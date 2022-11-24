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
        this.router.post('/usuario', this.create)
    }

    async create(req : Request , res : Response) : Promise<Response>{

        const payload = req.body

        let usuariocreatedto = await plainToClass(UsuarioCreateDto , payload)

        const errors = await validate(usuariocreatedto)

        if(errors.length > 0){
            console.log(errors);

            return res.status(400).json({
                "Validation-errors" : errors
            })
        }

        return res.json(await usuarioService.createUsuario(usuariocreatedto))

        return
    }

}