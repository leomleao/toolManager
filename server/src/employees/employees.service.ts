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

  async findOne(EmployeeId: string) {
    try {
      return await this.employeeRepository.find({ where: { id: EmployeeId }});
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

  async deleteOne(EmployeeId: string) {
    try {
      return await this.employeeRepository.removeById(EmployeeId);
    } catch (err) {
      return err;
    }
  }

}
