import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { EmployeesModule } from './employees/employees.module';
import { ToolsModule } from './tools/tools.module';
import { FrontendModule } from './frontend/frontend.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
    modules: [EmployeesModule, ToolsModule, FrontendModule],
})

export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/api/v1/');
  }
}