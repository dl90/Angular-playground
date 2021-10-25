import { EventEmitter, Injectable } from "@angular/core"

import { LoggingService } from "./logging.service"


@Injectable() // { providedIn: 'root' } // lazy loaded, wont work with lazy loaded modules
export class AccountsDataService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ]

  // injecting loggingService into this service (@Injectable)
  constructor (private loggingService: LoggingService) { }

  addAccount (name: string, status: string): void {
    this.accounts.push({ name, status })
    this.loggingService.logStatusChange(status)
  }

  updateStatus (id: number, status: string): void {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status)
  }

  async getAccounts (): Promise<{ name: string, status: string }[]> {
    return await new Promise(resolve => {
      setTimeout(() => resolve(this.accounts), 1000)
    })
  }

  /*
    service event emitter, useable in injected components (aka Observable)

    this.accountsService.statusUpdated.emit(status)
    this.accountsService.statusUpdated.subscribe((status: string) => console.log(status))
  */
  updateEventEmitter = new EventEmitter<string>()

}
