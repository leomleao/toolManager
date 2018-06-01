import { Module, Inject } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { toolProviders } from './tool.providers';

import { AuthModule } from '../auth.module';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';

@Module({
    modules: [DBModule, AuthModule],
    controllers: [ToolsController],
    providers: [
        ...toolProviders,
        ToolsService,
    ],
    exports: [ToolsService],
})

export class ToolsModule implements AuthModule{
    public configure(consumer: MiddlewaresConsumer) {
        consumer.apply(this.authMiddleware).forRoutes('/api/v1/tools/reserve');
    }
}
