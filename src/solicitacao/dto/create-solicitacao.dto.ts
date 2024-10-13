import { IsString, IsEmail, IsNotEmpty} from 'class-validator';
import { UsuarioEntity } from 'src/typeorm/entities/usuario.entity';

export class CreateSolicitacaoDto {

    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    link: string;

    @IsNotEmpty()
    solicitante: UsuarioEntity;
}
