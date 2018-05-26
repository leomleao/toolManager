import { Body, Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';

// ES modules
import ReactDOMServer from 'react-dom/server';

import App from './app/App'

@Controller('')
export class FrontendController {

  @Get('')
  async get(@Res() res) {  
      // return ReactDOMServer.renderToString(App)
  }
}

