import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './typeorm/database/data-source';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';

@Module({
  imports: [
    UsuariosModule,
    SolicitacaoModule,
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

