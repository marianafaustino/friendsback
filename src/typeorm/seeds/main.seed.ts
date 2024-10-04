import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../database/data-source';
import { UsuarioEntity } from '../entities/usuario.entity';

const dataSource = new DataSource(dataSourceOptions);
const userRepository = dataSource.getRepository(UsuarioEntity);

async function connect() {
  try {
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
    await dataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source connect', err);
  }
}

async function disconnect() {
  try {
    await dataSource.destroy();

    console.log('Data Source disconnected!');
  } catch (err) {
    console.error('Error during Data Source disconnect', err);
  }
}

async function seed() {
  const UserSeed = () => [
    {
      name: 'John Doe',
      email: 'john@doe.com'
    },
    {
      name: 'Jane Doe',
      email: 'jane@doe.com'
    },
    {
      name: 'Josh Doe',
      email: 'josh@doe.com'
    },
  ];

  await userRepository.save(UserSeed());
  console.log('created seeds');
}

async function runSeed() {
  await connect();
  console.log('connected');
  await seed();
  console.log('seed done');
  await disconnect();
  console.log('disconnected');
}

runSeed();
