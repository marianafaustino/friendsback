import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { UsuarioEntity } from 'src/typeorm/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IUsuarioPort } from 'src/usuarios/port/usuarios.port';

@Injectable()
export class UsuariosService implements IUsuarioPort{
  constructor(
    @InjectRepository(UsuarioEntity)
    private userRepository: Repository<UsuarioEntity>
  ) {}

  async criaUsuario(usuarioDTO: UsuarioDto) {
    
    const newUserEntity = this.userRepository.create(usuarioDTO);
    
    
    return await this.userRepository.save(newUserEntity);
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    let user = await this.findOne(id);
    user = { ...user, ...updateUsuarioDto };
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepository.softRemove(user);
  }
}