import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';
import { Repository } from 'typeorm';
import { ISolicitacaoPort } from './port/solicitacao.port';

@Injectable()
export class SolicitacaoService implements ISolicitacaoPort{

  constructor(
    @InjectRepository(SolicitacaoEntity)
    private solicitacaoRepository: Repository<SolicitacaoEntity>
  ) {}

  async criaSolicitacao(createSolicitacaoDto: CreateSolicitacaoDto) {
    const novaSolicitacaoEntity = this.solicitacaoRepository.create(createSolicitacaoDto);
    
    return await this.solicitacaoRepository.save(novaSolicitacaoEntity);
  }

  findAll(): Promise<SolicitacaoEntity[]> {
    return null;
  }

  findOne(id: number): Promise<SolicitacaoEntity | null> {
    return null;
  }
  remove(id: number): Promise<SolicitacaoEntity> {
    return null;
  }
}
