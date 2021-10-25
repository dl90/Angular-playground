import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })
export class LoggingService {
  prevLog = ''

  printLog (msg: string) {
    console.log(msg)

    this.printPreviousLog()
    this.prevLog = msg
  }

  printPreviousLog () {
    console.log(this.prevLog)
  }

}
