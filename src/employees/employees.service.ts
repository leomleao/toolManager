import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Employee } from './employee.interface';

@Component()
export class EmployeesService {
  constructor( @Inject('EmployeeRepositoryToken') private readonly employeeRepository: Repository<Employee>) { }

  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepository.find();
    } catch (err) {
      return err;
    }
  }

  async create(Employee: Employee) {
    try {
      return await this.employeeRepository.save(Employee);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(EmployeeId: string) {
    try {
      return await this.employeeRepository.removeById(EmployeeId);
    } catch (err) {
      return err;
    }
  }


}
