import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';
import { EmployeesModule } from './employees/employees.module';
@Module({
    modules: [EntriesModule, EmployeesModule],
})

export class ApplicationModule { }