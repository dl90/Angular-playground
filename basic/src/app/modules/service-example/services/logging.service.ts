
export class LoggingService {

  logStatusChange (status: string): void {
    console.log('Status changed, new status: ' + status);
  }

}
