import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';
import { Repository } from 'typeorm';
import { ISolicitacaoPort } from '../port/solicitacao.port';
import { EventEmitter2 } from 'eventemitter2'; 
import { SolicitacaoCreatedEvent } from 'src/events/solicitacao-created.event';
import { UsuarioEntity } from 'src/typeorm/entities/usuario.entity';

@Injectable()
export class SolicitacaoService implements ISolicitacaoPort{

  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
    @InjectRepository(SolicitacaoEntity)
    private solicitacaoRepository: Repository<SolicitacaoEntity>,
    private eventEmitter: EventEmitter2
  ) {}

  async criaSolicitacao(createSolicitacaoDto: CreateSolicitacaoDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id: createSolicitacaoDto.solicitante.id });

  if (!usuario) {
    throw new NotFoundException('Usuário não encontrado');
  }

  const novaSolicitacaoEntity = this.solicitacaoRepository.create({
    ...createSolicitacaoDto,
    solicitante: usuario 
  });

  const savedSolicitacao = await this.solicitacaoRepository.save(novaSolicitacaoEntity);

  
  this.eventEmitter.emit('solicitacao.created', new SolicitacaoCreatedEvent(savedSolicitacao));

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
