import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from 'src/typeorm/entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(private dataSource: DataSource) {}
  private userRepository = this.dataSource.getRepository(UsuarioEntity);

  async create(usurioDTO: UsuarioDto) {
    return this.userRepository.save(usurioDTO);
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