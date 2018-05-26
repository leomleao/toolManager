import { Test } from '@nestjs/testing';

import { PostsController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: EmployeesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PostsController],
      components: [EmployeesService],
    }).compile();

    postsService = module.get<EmployeesService>(EmployeesService);
    postsController = module.get<PostsController>(PostsController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      const result = [{ title: 'This is a test post' }];
      jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
      expect(await postsController.findAll()).toBe(result);
    });
  });
});