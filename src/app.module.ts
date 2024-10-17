import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './typeorm/database/data-source';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { FeedbackModule } from './feedback/feedback.module';
import { EventEmitterModule, EventEmitter2 } from '@nestjs/event-emitter';
import { SolicitacaoNotificationObserver } from './observers/solicitacao-notification.observer';

@Module({
  imports: [
    UsuariosModule,
    SolicitacaoModule,
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    FeedbackModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, SolicitacaoNotificationObserver],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly solicitacaoNotificationObserver: SolicitacaoNotificationObserver
  ) {}

  onModuleInit() {
    this.solicitacaoNotificationObserver.handle = this.solicitacaoNotificationObserver.handle.bind(this.solicitacaoNotificationObserver);
    
    this.eventEmitter.on('solicitacao.created', this.solicitacaoNotificationObserver.handle);
  }
}
