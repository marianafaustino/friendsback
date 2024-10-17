import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('feedback')
export class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mensagem: string

  @ManyToOne(() => UsuarioEntity, usuario => usuario.feedbacks)
  comentador: UsuarioEntity;
}
