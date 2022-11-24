import { ResponseDto } from "../common/dto/response.dto";
import { CategoriaCreate } from "../dtos/categoria-create.dtos";
import { CategoriaUpdate } from "../dtos/categoria-update.dtos";
import { categoria } from "../models/categoria";

class CategoriaServices{

    private responsedto : ResponseDto;

    public async getList(){

        this.responsedto = new ResponseDto();

        try {
        
        this.responsedto.data = await categoria.findAll({});
        this.responsedto.code = 200;
        this.responsedto.message = 'Listado de categoria'
        return this.responsedto;

        } catch (error) {

        this.responsedto.code = 500;
        this.responsedto.message = 'Error interno, revisar los logs'
        return this.responsedto;

        }
        
    }

    public async getCategoria(id : number){
        const categoriaDb = await categoria.findOne({ where : {id} })
        return categoriaDb;
    }

    public async create(categoriacreatedto : CategoriaCreate){
        this.responsedto = new ResponseDto();
        
        try {

        this.responsedto.data = await categoria.create(categoriacreatedto)
        this.responsedto.code = 201;
        this.responsedto.message = 'Categoria creada correctamente'
        return this.responsedto;
        
        } catch (error) {

        this.responsedto.code = 500;
        this.responsedto.message = 'Error al crear la categoria'
        return this.responsedto;
        }

    }

    public async update(updatecategoriadto : CategoriaUpdate , id : number){
        const categoria =  await this.getCategoria(id)

        if(!categoria){
            return null
        }

        const categoriaupdate = {
            id,
            ...CategoriaCreate
        }

        const refresh = await categoria.update(categoriaupdate , { where : {id}})

        return this.getCategoria(id)

    }

    public async delete(id : number){
        const categoriaDb = await this.getCategoria(id)
        
        if(!categoriaDb){
            return null
        }

        const deletecategoria = await categoria.destroy({ where : {id}})

        return categoria;

    }

}

export default new CategoriaServices();