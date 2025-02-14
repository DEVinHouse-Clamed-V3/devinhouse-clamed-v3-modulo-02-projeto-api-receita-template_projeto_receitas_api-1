import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt('5432'),
  username: 'postgres',
  password: 'postgres',
  database: 'receita',
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
});
