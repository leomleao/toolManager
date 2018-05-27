import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { toolProviders } from './tool.providers';

@Module({
    modules: [DBModule],
    controllers: [ToolsController],
    providers: [
        ...toolProviders,
        ToolsService,
    ],
    exports: [ToolsService],
})

export class ToolsModule { }
