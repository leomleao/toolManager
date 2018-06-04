import { Test } from '@nestjs/testing';

import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('EmployeesController', () => {
  let postsController: EmployeesController;
  let postsService: EmployeesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [EmployeesService],
    }).compile();

    postsService = module.get<EmployeesService>(EmployeesService);
    postsController = module.get<EmployeesController>(EmployeesController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      const result = [{ title: 'This is a test post' }];
      jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
      expect(await postsController.findAll()).toBe(result);
    });
  });
});