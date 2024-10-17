import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';
import { Repository } from 'typeorm';
import { ISolicitacaoPort } from '../port/solicitacao.port';
import { EventEmitter2 } from 'eventemitter2'; 
import { SolicitacaoCreatedEvent } from 'src/events/solicitacao-created.event';

@Injectable()
export class SolicitacaoService implements ISolicitacaoPort{

  constructor(
    @InjectRepository(SolicitacaoEntity)
    private solicitacaoRepository: Repository<SolicitacaoEntity>,
    private eventEmitter: EventEmitter2
  ) {}

  async criaSolicitacao(createSolicitacaoDto: CreateSolicitacaoDto) {
    const novaSolicitacaoEntity = this.solicitacaoRepository.create(createSolicitacaoDto);
    
    const savedSolicitacao = await this.solicitacaoRepository.save(novaSolicitacaoEntity);

    // Emitindo o evento após a criação da solicitação
    this.eventEmitter.emit('solicitacao.created', new SolicitacaoCreatedEvent(savedSolicitacao.id));

    return savedSolicitacao;
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
