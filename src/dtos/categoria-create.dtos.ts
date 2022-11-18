import {Length , IsNotEmpty} from 'class-validator'

export class CategoriaCreate{

    @Length(3,50)
    @IsNotEmpty()
    name : string;
}