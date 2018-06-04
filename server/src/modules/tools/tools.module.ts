import { Module, Inject } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { toolProviders } from './tool.providers';

import { ToolMiddleware } from './tool.middleware';

import { EmployeesService } from '../employees/employees.service';
import { employeeProviders } from '../employees/employee.providers';

import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';

@Module({
    modules: [DBModule],
    controllers: [ToolsController],
    providers: [
        ...toolProviders,
        ToolsService,
        ...employeeProviders,
        EmployeesService,
    ],
    exports: [ToolsService],
})

export class ToolsModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(ToolMiddleware)
            .with('ToolsModule')
            .forRoutes('/api/v1/tools/reserve');
    }
}
