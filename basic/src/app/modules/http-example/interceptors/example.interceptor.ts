import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable()
export class ExampleInterceptor implements HttpInterceptor {

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const authReq = request.clone({ setHeaders: { Authorization: 'token' } })
    const newRequest = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .append('Authorization', 'token')
    })

    // console.log(newRequest.headers)
    return next.handle(newRequest)
  }

}
