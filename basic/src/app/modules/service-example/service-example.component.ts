import { Component, OnInit } from '@angular/core'

import { AccountsDataService } from './services/accounts-data.service'


@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: []
})
export class ServiceExampleComponent implements OnInit {

  accounts: Array<{ name: string, status: string }> = []

  constructor (
    private accountsDataService: AccountsDataService
  ) { }

  ngOnInit (): void {
    this.accounts = this.accountsDataService.accounts;
  }

  onAccountAdded (newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged (updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
