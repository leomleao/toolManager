import { Body, Controller, Delete, Get, Param, Post, HttpStatus, HttpException, Req, UseInterceptors } from '@nestjs/common';
import * as slug from 'slug';

import { CreateCompanyDto } from './company.dto';
import { CompaniesService } from './companies.service';
import { DispatcherInterceptor } from '../../common/dispatcher.interceptor';
// import { Company } from './company.entity';

@UseInterceptors(DispatcherInterceptor)
@Controller('/api/v1/companies')
export class CompaniesController {

  constructor(private readonly companiesService: CompaniesService) { }

  @Get(':companyId')
  async findOne(@Param('companyId') companyId) {
     return await this.companiesService.findOne({id: companyId});
  }

  // @Post()
  // async create( @Body() createCompanyDto: CreateCompanyDto) {
  //   // const newCompany = Object.assign({}, createCompanyDto, {
  //   //   created_at: new Date(),
  //   //   password: null,
  //   // });
  //   return this.companiesService.create(newCompany);
  // }

  @Delete(':companyId')
  delete( @Param('companyId') companyId) {
    return this.companiesService.deleteOne(companyId);
  }
}
