import { UsuarioCreateDto } from "../dtos/usuario-create.dto";
import { usuario } from "../models/usuarios";
import { ResponseDto } from "../common/dto/response.dto";
const authconfig = require('../config/auth.config')

class UsuarioServices{

    private responsedto :  ResponseDto;

    public async getList(){
        this.responsedto = new ResponseDto();

        try {
        
        this.responsedto.data = await usuario.findAll({});
        this.responsedto.code = 200;
        this.responsedto.message = 'Listado de categoria'
        return this.responsedto;

        } catch (error) {

        this.responsedto.code = 500;
        this.responsedto.message = 'Error interno, revisar los logs'
        return this.responsedto;

        }
    }

    public async getUsuario(id : number){
        this.responsedto = new ResponseDto();

        const usuarioDb = await usuario.findOne({ where : {id} })

        if(!usuarioDb){
            this.responsedto.message = `Usuario ${id} no fue encontrada`;
            this.responsedto.code = 404;
            return this.responsedto;
        
        }

        this.responsedto.message = '';
        this.responsedto.code = 200;
        this.responsedto.data = usuarioDb;
        return this.responsedto;
            
    }
    

    public async create(usuariocreatedto : UsuarioCreateDto){  
        //Creando un usuario

        this.responsedto = new ResponseDto();

        try{    
    
            this.responsedto.data = await usuario.create(usuariocreatedto);
            this.responsedto.code = 201;
            this.responsedto.message = 'Usuario creado exitosamente';
            return this.responsedto;
        
        }catch(error){
            this.responsedto.code = 501;
            this.responsedto.message = 'ERROR';
            console.log(error)
            return this.responsedto;
        
        }

        
    }

}

export default new UsuarioServices()