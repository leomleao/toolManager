import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import * as slug from 'slug';
import { v4 as uuid } from 'uuid';
import * as qrcode from 'qrcode';

import { CreateEmployeeDto } from './create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.interface';

@Controller('api/v1/employees')
export class EmployeesController {

  constructor(private readonly employeesService: EmployeesService) { }

  @Get('qrcode/:employeeId')
  async getOne(@Param('employeeId') employeeId) {
    const employee = await this.employeesService.findOne(employeeId);
    if (employee.length > 0) {

      const id = employee[0].id;

      const svgFile = qrcode.toString('http://192.168.1.4:3000/api/v1/employees/' + id)
        .then(svg => {
          return svg;
        })
        .catch(err => {
          return err;
        });
      return svgFile;
    }
  }

  @Get(':employeeId')
  async findOne(@Param('employeeId') employeeId) {
     return await this.employeesService.findOne(employeeId);
  }

  @Post()
  async create( @Body() createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = Object.assign({}, createEmployeeDto, {
      id: uuid(),
      created_at: new Date(),
    });
    return this.employeesService.create(newEmployee);
  }

  @Delete(':employeeId')
  delete( @Param('employeeId') employeeId) {
    return this.employeesService.deleteOne(employeeId);
  }
}
