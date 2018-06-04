import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Company } from './company.entity';

@Injectable()
export class CompaniesService {
  constructor( @Inject('CompanyRepositoryToken') private readonly companyRepository: Repository<Company>) { }

  async findAll(): Promise<Company[]> {
    try {
      return await this.companyRepository.find();
    } catch (err) {
      return err;
    }
  }

  async findOne(conds: object) {
    try {
      return await this.companyRepository.findOne({ where: conds });
    } catch (err) {
      return err;
    }
  }

  async create(company: Company) {
    try {
      return await this.companyRepository.save(company);
    } catch (err) {
      return err;
    }
  }

  async save(company: Company) {
    try {
      return await this.companyRepository.save(company);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(CompanyId: string) {
    try {
      const companyToRemove = await this.companyRepository.findOne({ where: { id: CompanyId }});
      return await this.companyRepository.remove(companyToRemove);
    } catch (err) {
      return err;
    }
  }

}
