import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AccountsDataService } from '../services/accounts-data.service';

// import { LoggingService } from '../services/logging.service'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string }
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>()

  constructor (
    // private loggingService: LoggingService,
    private accountsDataService: AccountsDataService
  ) { }

  ngOnInit (): void { }

  onSetTo (status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status })
    this.accountsDataService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status)
  }

}
