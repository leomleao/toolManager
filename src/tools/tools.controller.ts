import { Body, Controller, Delete, Get, Param, Post, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as slug from 'slug';
import { v4 as uuid } from 'uuid';
import * as qrcode from 'qrcode';

import { CreateToolDto } from './create-tool.dto';
import { ToolsService } from './tools.service';
import { Tool } from './tool.interface';

@Controller('api/v1/tools')
export class ToolsController {

  constructor(private readonly toolsService: ToolsService) { }

  @Get('qrcode/:toolId')
  async getOne(@Param('toolId') toolId) {
     const tool = await this.toolsService.findOne(toolId);
    if (tool.length > 0) {
      console.warn(tool);
      const id = tool[0].id;

       let svgFile = qrcode.toString(id)
        .then(svg => {
          console.warn(svg);
          return svg;
        })
        .catch(err => {
          console.error(err);
          return err
        }) 
      return svgFile  
    }
  }

  @Get('free/:toolId')
  async freeOne(@Param('toolId') toolId) {
    var tool = await this.toolsService.findOne(toolId);    
    tool.in_use = null;
    tool.since = null;
    return await this.toolsService.save(tool);
  }

  @Post('reserve')
  async reserve(@Body() body) {
    var tool = await this.toolsService.findOne(body.toolId);
    if (!tool.in_use || !tool.since){
      tool.in_use = body.employeeId;
      tool.since = new Date();
      return await this.toolsService.save(tool);
    } else {
      throw new HttpException('Tool already in Use!', HttpStatus.BAD_REQUEST); 
    }       
  }

  @Get(':toolId')
  async findOne(@Param('toolId') toolId) {
    return this.toolsService.findOne(toolId);
  }

  @Post()
  async create( @Body() createToolDto: CreateToolDto) {
    const newTool = Object.assign({}, createToolDto, {
      id: uuid(),
      created_at: new Date(),
      in_use: null,
      since: null,
    });
    return this.toolsService.create(newTool);
  }

  @Delete(':toolId')
  delete( @Param('toolId') toolId) {
    return this.toolsService.deleteOne(toolId);
  }
}
