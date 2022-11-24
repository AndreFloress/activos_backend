import { IsNotEmpty , Length } from "class-validator";

export class UsuarioCreateDto{
    @Length(3,15)
    @IsNotEmpty()
    user : string

    @Length(3,20)
    @IsNotEmpty()
    password : string

    @Length(3,30)
    @IsNotEmpty()
    rol : string
}