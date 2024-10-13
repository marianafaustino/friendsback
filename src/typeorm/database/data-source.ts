import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv'
import { UsuarioEntity } from '../entities/usuario.entity';

dotenv.config()

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_NAME,
    entities: [UsuarioEntity],
    synchronize: true, 
  }

export default new DataSource(dataSourceOptions);