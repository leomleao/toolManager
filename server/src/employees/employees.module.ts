import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { employeeProviders } from './employee.providers';

@Module({
    modules: [DBModule],
    controllers: [EmployeesController],
    providers: [
        ...employeeProviders,
        EmployeesService,
    ],
    exports: [EmployeesService],
})

export class EmployeesModule { }
