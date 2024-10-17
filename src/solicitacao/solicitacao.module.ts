import { Module } from '@nestjs/common';
import { SolicitacaoService } from './adapter/solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SolicitacaoNotificationObserver } from 'src/observers/solicitacao-notification.observer';
import { UsuariosService } from 'src/usuarios/adapter/usuarios.service';

@Module({
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService, SolicitacaoNotificationObserver, UsuariosService],
  imports: [TypeOrmModule.forFeature([SolicitacaoEntity]),EventEmitterModule.forRoot()]
})
export class SolicitacaoModule {}
