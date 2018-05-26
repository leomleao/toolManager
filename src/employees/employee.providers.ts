import { Connection } from 'typeorm';

import { Employee } from './employee.entity';

export const employeeProviders = [{
    provide: 'EmployeeRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Employee),
    inject: ['DbConnectionToken'],
}];