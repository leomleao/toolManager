import { Module } from '@nestjs/common';

import { EmployeesModule } from './employees/employees.module';
import { ToolsModule } from './tools/tools.module';
import { FrontendModule } from './frontend/frontend.module';

@Module({
    modules: [EmployeesModule, ToolsModule, FrontendModule],
})

export class ApplicationModule { }