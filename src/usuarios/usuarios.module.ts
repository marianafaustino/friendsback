import { Module } from '@nestjs/common';
import { UsuariosService } from './adapter/usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../typeorm/entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  exports: [TypeOrmModule, UsuariosService]
})
export class UsuariosModule {}
