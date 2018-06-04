import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { CompaniesModule } from './modules/companies/companies.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { ToolsModule } from './modules/tools/tools.module';
import { FrontendModule } from './modules/frontend/frontend.module';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
    modules: [EmployeesModule, ToolsModule, FrontendModule, CompaniesModule],
})

export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/api/v1/');
  }
}