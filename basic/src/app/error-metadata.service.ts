import { Injectable, ErrorHandler } from '@angular/core'

@Injectable()
export class ErrorMetadataService implements ErrorHandler {

  handleError (error: any): void {
    const o = Object.create(null)
    Object.assign(o, {
      timestamp: new Date().toISOString(),
      message: error.message,
      zone: error.zone
    })

    console.error(o)
  }
}
