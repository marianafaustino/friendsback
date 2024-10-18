import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv'
import { UsuarioEntity } from '../entities/usuario.entity';
import { SolicitacaoEntity } from '../entities/solicitacao.entity';
import { FeedbackEntity } from '../entities/feedback.entity';

dotenv.config()
//Tirei o .env do git ignore para fazer o deploy no lightsail sem precisar configurar as variáveis de ambiente. Depois acerto.
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Reprograma2024*',
    database: 'friendsback',
    entities: [UsuarioEntity, SolicitacaoEntity, FeedbackEntity],
    synchronize: true, 
  }

export default new DataSource(dataSourceOptions);