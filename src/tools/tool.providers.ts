import { Connection } from 'typeorm';

import { Tool } from './tool.entity';

export const toolProviders = [{
    provide: 'ToolRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Tool),
    inject: ['DbConnectionToken'],
}];