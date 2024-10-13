import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('solicitacao')
export class SolicitacaoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string

  @Column({unique: true})
  link: string;

  @Column()
  feedbacks: string

  @ManyToOne(() => UsuarioEntity, usuario => usuario.solicitacoes)
  solicitante: UsuarioEntity;
}
