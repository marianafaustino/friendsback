import { Module } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';

@Module({
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService],
  imports: [TypeOrmModule.forFeature([SolicitacaoEntity])]
})
export class SolicitacaoModule {}
