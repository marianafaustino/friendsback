import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitacaoService {

  constructor(
    @InjectRepository(SolicitacaoEntity)
    private solicitacaoRepository: Repository<SolicitacaoEntity>
  ) {}

  async criaSolicitacao(createSolicitacaoDto: CreateSolicitacaoDto) {
    const novaSolicitacaoEntity = this.solicitacaoRepository.create(createSolicitacaoDto);
    
    return await this.solicitacaoRepository.save(novaSolicitacaoEntity);
  }

  findAll() {
    return `This action returns all solicitacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacao`;
  }

  update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return `This action updates a #${id} solicitacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacao`;
  }
}
