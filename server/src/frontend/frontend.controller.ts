import { Body, Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';

@Controller('')
export class FrontendController {

  @Get('')
  async get(@Res() res) {  
  	
  }
}

