import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SolicitacaoEntity } from './solicitacao.entity';
import { FeedbackEntity } from './feedback.entity';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string

  @Column({ unique: true })
  email: string;

  @OneToMany(() => SolicitacaoEntity, solicitacao => solicitacao.solicitante)
  solicitacoes: SolicitacaoEntity[];

  @OneToMany(() => FeedbackEntity, feedback => feedback.comentador)
  feedbacks: FeedbackEntity[];
}
