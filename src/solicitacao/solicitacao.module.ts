import { Module } from '@nestjs/common';
import { SolicitacaoService } from './adapter/solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoEntity } from '../typeorm/entities/solicitacao.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SolicitacaoNotificationObserver } from '../observers/solicitacao-notification.observer';
import { UsuariosService } from '../usuarios/adapter/usuarios.service';
import { UsuarioEntity } from '../typeorm/entities/usuario.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService, SolicitacaoNotificationObserver, UsuariosService],
  imports: [TypeOrmModule.forFeature([SolicitacaoEntity, UsuarioEntity]),EventEmitterModule.forRoot(), UsuariosModule]
})
export class SolicitacaoModule {}
