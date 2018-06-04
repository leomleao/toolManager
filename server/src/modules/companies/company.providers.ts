import { Connection } from 'typeorm';

import { Company } from './company.entity';

export const companyProviders = [{
    provide: 'CompanyRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Company),
    inject: ['DbConnectionToken'],
}];