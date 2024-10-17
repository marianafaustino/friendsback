import { UsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { UsuarioEntity } from 'src/typeorm/entities/usuario.entity';

export interface IUsuarioPort {
  criaUsuario(usuarioDTO: UsuarioDto): Promise<UsuarioEntity>;
  findAll(): Promise<UsuarioEntity[]>;
  findOne(id: number): Promise<UsuarioEntity | null>;
  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UsuarioEntity>;
  remove(id: number): Promise<UsuarioEntity>;
}