
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';
import { SolicitacaoEntity } from 'src/typeorm/entities/solicitacao.entity';

export interface ISolicitacaoPort {
  criaSolicitacao(createSolicitacaoDto: CreateSolicitacaoDto): Promise<SolicitacaoEntity>;
  findAll(): Promise<SolicitacaoEntity[]>;
  findOne(id: number): Promise<SolicitacaoEntity | null>;
  remove(id: number): Promise<SolicitacaoEntity>;
}