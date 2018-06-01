import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { EmployeesService } from '../employees/employees.service';
import { employeeProviders } from '../employees/employee.providers';

import { FrontendController } from './frontend.controller';

@Module({
    modules: [DBModule],	
    controllers: [FrontendController],
    providers: [
        ...employeeProviders,
        EmployeesService,
    ],
    exports: [EmployeesService],
})

export class FrontendModule { }
