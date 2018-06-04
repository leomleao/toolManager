import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { companyProviders } from './company.providers';

@Module({
    modules: [DBModule],
    controllers: [CompaniesController],
    providers: [
        ...companyProviders,
        CompaniesService,
    ],
    exports: [CompaniesService],
})

export class CompaniesModule { }