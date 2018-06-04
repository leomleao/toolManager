import { Injectable, NestInterceptor, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DispatcherInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(map(value => value !== (null || undefined) ? throwError(new HttpException('Not Found!', HttpStatus.NOT_FOUND)) : value ));
      // catchError(err =>
      //   Observable.throw(new HttpException('Message', HttpStatus.BAD_GATEWAY)),
      // ),    
  }
}




// @Injectable()
// export class TransformInterceptor<T>
//   implements NestInterceptor<T, Response<T>> {
//   intercept(
//     context: ExecutionContext,
//     call$: Observable<T>,
//   ): Observable<Response<T>> {
//     return call$.pipe(map(data => ({ data })));
//   }
// }