import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('logging request', request)
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            console.log('logging response', event)
          }
        })
      )
  }

}
