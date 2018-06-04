import { Body, Controller, Delete, Get, Param, Post, HttpStatus, HttpException, Req, UseInterceptors } from '@nestjs/common';
import * as slug from 'slug';
import { v4 as uuid } from 'uuid';
import * as qrcode from 'qrcode';

import { CreateEmployeeDto } from './employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';

import { DispatcherInterceptor } from '../../common/dispatcher.interceptor';

@UseInterceptors(DispatcherInterceptor)
@Controller('/api/v1/employees')
export class EmployeesController {

  constructor(private readonly employeesService: EmployeesService) { }

  @Get('qrcode/:employeeId')
  async getOne(@Param('employeeId') employeeId, @Req() request) {
    const fullUrl = 'http://' + request.headers.host + '/login/';
    const employee = await this.employeesService.findOne({id : employeeId });
    if (employee) {
      const id = employee.id;

      const svgFile = qrcode.toString(fullUrl + id)
        .then(svg => {
          return svg;
        })
        .catch(err => {
          return err;
        });
      return svgFile;
    } else {
      throw new HttpException('Employee not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':employeeId')
  async findOne(@Param('employeeId') employeeId) {
     return await this.employeesService.findOne({id : employeeId });
  }

  @Post()
  async create( @Body() createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = Object.assign({}, createEmployeeDto, {
      id: uuid(),
      created_at: new Date(),
      password: null,
    });
    return this.employeesService.create(newEmployee);
  }

  @Delete(':employeeId')
  delete( @Param('employeeId') employeeId) {
    return this.employeesService.deleteOne(employeeId);
  }
}
