import { Body, Controller, Get, HttpStatus, Param, Post, Res, HttpException } from '@nestjs/common';
import * as path from 'path';
import { EmployeesService } from '../employees/employees.service';
import { Employee } from '../employees/employee.interface';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('')
export class FrontendController {

  constructor(private readonly employeesService: EmployeesService) { }

  private _options = {
        algorithm: 'HS256',
        expiresIn: '2 days',
        jwtid: process.env.JWT_ID || '',
    };

  @Get('/')
  get(@Res() res) {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../../../client/build') });
  }

  @Get('/app/*')
  getApp(@Res() res) {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../../../client/build') });
  }

  @Post('/setPass')
  async setPass(@Body() body) {
    const employee = await this.employeesService.findOne(body.employeeId);

    if (!employee.password) {

      bcrypt.hash(body.password, 13, function(err, hash) {
        employee.password = hash;
        return this.employeesService.save(employee);
      });

    } else {
      throw new HttpException('Password already set!', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('auth/:employeeId')
  async findOne(@Param('employeeId') employeeId) {
    const employee = await this.employeesService.findOne(employeeId);

    if (employee) {
      const payload = {
        id: employee.id,
        name: employee.name,
    };

      return await jwt.sign(payload, process.env.JWT_KEY || '', this._options);

    } else {
      throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
    }
  }
}