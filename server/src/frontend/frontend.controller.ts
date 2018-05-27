import { Body, Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import * as path from 'path';

@Controller('')
export class FrontendController {

  @Get('')
  root(@Res() res) {
    res.sendFile("index.html", {"root": __dirname});
  }
}