import { createConnection } from 'typeorm';

import { Employee } from '../employees/employee.entity';
import { Tool } from '../tools/tool.entity';

export const dbProvider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mssql',
      url: process.env.DATABASE_URL,
      entities: [
        Employee,
        Tool,
      ],
      options: {
        encrypt: true,
      },
      logging: true,
      synchronize: true, // DEV only, do not use on PROD!
    }),
  };
