import { CategoriaCreate } from "../dtos/categoria-create.dtos";
import { CategoriaUpdate } from "../dtos/categoria-update.dtos";
import { categoria } from "../models/categoria";

class CategoriaServices{

    public async getList(){
        const categoriaDb = await categoria.findAll({});
        return categoriaDb;
    }

    public async getCategoria(id : number){
        const categoriaDb = await categoria.findOne({ where : {id} })
        return categoriaDb;
    }

    public async create(categoriacreatedto : CategoriaCreate){
        const categoriacreate = await categoria.create(categoriacreatedto)

        return categoriacreate;
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