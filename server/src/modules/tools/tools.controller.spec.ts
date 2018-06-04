import { Test } from '@nestjs/testing';

import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';

describe('EmployeesController', () => {
  let postsController: ToolsController;
  let postsService: ToolsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ToolsController],
      providers: [ToolsService],
    }).compile();

    postsService = module.get<ToolsService>(ToolsService);
    postsController = module.get<ToolsController>(ToolsController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      const result = [{ title: 'This is a test post' }];
      jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
      expect(await postsController.findAll()).toBe(result);
    });
  });
});