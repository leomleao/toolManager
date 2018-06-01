import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Employee } from './employee.interface';

@Injectable()
export class EmployeesService {
  constructor( @Inject('EmployeeRepositoryToken') private readonly employeeRepository: Repository<Employee>) { }

  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepository.find();
    } catch (err) {
      return err;
    }
  }

  async findOne(conds: Object) {
    try {
      return await this.employeeRepository.findOne({ where: conds });
    } catch (err) {
      return err;
    }
  }

  async create(employee: Employee) {
    try {
      return await this.employeeRepository.save(employee);
    } catch (err) {
      return err;
    }
  }

  async save(employee: Employee) {
    try {
      return await this.employeeRepository.save(employee);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(EmployeeId: string) {
    try {
      const employeeToRemove = await this.employeeRepository.findOne({ where: { id: EmployeeId }});
      return await this.employeeRepository.remove(employeeToRemove);
    } catch (err) {
      return err;
    }
  }

}
