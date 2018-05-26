import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import * as slug from 'slug';
import { v4 as uuid } from 'uuid';


import { CreateEmployeeDto } from './create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.interface';

@Controller('employees')
export class EmployeesController {

  constructor(private readonly employeesService: EmployeesService) { }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Post()
  async create( @Body() createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = Object.assign({}, createEmployeeDto, {
      id: uuid(),
      created_at: new Date(),
    });
    await this.employeesService.create(newEmployee);
  }

  // @Delete(':employeeId')
  // delete( @Param('employeeId') employeeId) {
  //   return this.employeesService.deleteOne(employeeId);
  // }
}
