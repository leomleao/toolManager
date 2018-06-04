import * as jwt from 'jsonwebtoken';
import { Middleware, NestMiddleware, HttpException, BadRequestException, HttpStatus, Inject } from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';

@Middleware()
export class ToolMiddleware implements NestMiddleware {
    constructor(private employeesService : EmployeesService) {}

    public resolve() {
        return async (req, res, next) => {
            if (!req.headers.authorization) next(new HttpException('Please provide Authorization Header!', HttpStatus.FORBIDDEN));
            if (!((req.headers.authorization as string).split(' ')[0] === 'Bearer')) next(new HttpException('Please provide Authorization Header with "Bearer TOKEN" format!', HttpStatus.FORBIDDEN));
      
            const token = (req.headers.authorization as string).split(' ')[1];
            const decoded: any = jwt.verify(token, process.env.JWT_KEY || '');
            console.warn(decoded.id);
            console.warn(decoded.name);
            if (!decoded.id || !decoded.name) next(new HttpException('Bad Token!', HttpStatus.FORBIDDEN));

            const employee = await this.employeesService.findOne({
                    id: decoded.id,
                    name: decoded.name,
                });                
            if (!employee) next(new HttpException('Employee not found!', HttpStatus.FORBIDDEN));
            next();

        };
    }
}
