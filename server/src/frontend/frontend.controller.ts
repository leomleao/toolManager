import { Body, Controller, Get, Param, Res } from '@nestjs/common';
import * as path from 'path';

@Controller('')
export class FrontendController {

  @Get('')
  get(@Res() res) {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../../../client/dist') });
  }
}