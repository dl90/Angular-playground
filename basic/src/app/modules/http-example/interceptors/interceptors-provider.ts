import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { ExampleInterceptor } from './example.interceptor'
import { LoggingInterceptor } from './logging.interceptor'

export const InterceptorsProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
]
