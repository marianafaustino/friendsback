import { SolicitacaoEntity } from '../typeorm/entities/solicitacao.entity';

export class SolicitacaoCreatedEvent {
  constructor(public readonly solicitacao: SolicitacaoEntity) {}
}