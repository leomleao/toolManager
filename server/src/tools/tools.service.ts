import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Tool } from './tool.interface';

@Injectable()
export class ToolsService {
  constructor( @Inject('ToolRepositoryToken') private readonly toolRepository: Repository<Tool>) { }

  async findAll(): Promise<Tool[]> {
    try {
      return await this.toolRepository.find();
    } catch (err) {
      return err;
    }
  }

  async findOne(ToolId: string) {
    try {
      return await this.toolRepository.findOne({ where: { id: ToolId }});
    } catch (err) {
      return err;
    }
  }

  async save(tool: Tool) {
    try {
      return await this.toolRepository.save(tool);
    } catch (err) {
      return err;
    }
  }

  async create(tool: Tool) {
    try {
      return await this.toolRepository.save(tool);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(ToolId: string) {
    try {
      const toolToRemove = await this.toolRepository.findOne({ where: { id: ToolId }});
      return await this.toolRepository.remove(toolToRemove);
    } catch (err) {
      return err;
    }
  }
}