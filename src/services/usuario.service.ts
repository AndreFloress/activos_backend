import { UsuarioCreateDto } from "../dtos/usuario-create.dto";
import { usuario } from "../models/usuarios";

class UsuarioServices{

    public async createUsuario(usuariocreatedto : UsuarioCreateDto){
        const usuariocreate = await usuario.create(usuariocreatedto)
        
        return usuariocreate;
    }

}

export default new UsuarioServices()