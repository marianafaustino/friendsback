import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class UsuarioDto {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
    @MaxLength(15, {message: 'A senha deve ter no máximo 15 caracteres'})
    senha: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}

