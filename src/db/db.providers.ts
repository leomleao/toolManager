import { createConnection } from 'typeorm';

import { Entry } from '../entries/entry.entity';
import { Employee } from '../employees/employee.entity';



export const dbProvider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: '127.0.0.1',
      // host: process.env.DB_HOST,
      port: 5432,
      // port: parseInt(process.env.DB_PORT, 10),
      username: 'postgres',
      // username: process.env.DB_USER,
      password: '123456',
      // password: process.env.DB_PW,
      entities: [
        Entry,
        Employee
      ],
      synchronize: true, // DEV only, do not use on PROD!
    }),
  };
