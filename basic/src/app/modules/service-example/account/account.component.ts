import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AccountsDataService } from '../services/accounts-data.service'

// import { LoggingService } from '../services/logging.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() account: { name: string; status: string }
  @Input() id: number
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>()

  constructor(
    // private loggingService: LoggingService,
    private accountsDataService: AccountsDataService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status })
    this.accountsDataService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status)
  }
}
