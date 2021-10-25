import { Component, OnInit, EventEmitter, Output } from '@angular/core'

// import { LoggingService } from '../services/logging.service'
import { AccountsDataService } from '../services/accounts-data.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>()

  onCreateAccount (accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // })
    this.accountsDataService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  constructor (
    // private loggingService: LoggingService,
    private accountsDataService: AccountsDataService
  ) { }

  ngOnInit (): void { }

}
