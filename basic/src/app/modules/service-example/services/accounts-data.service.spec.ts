import { TestBed } from '@angular/core/testing'

import { AccountsDataService } from './accounts-data.service'
import { LoggingService } from './logging.service'

describe('Accounts data service', () => {
  let service: AccountsDataService

  const loggingServiceSpy = jasmine.createSpyObj('LoggingService', ['logStatusChange'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountsDataService,
        LoggingService
        // { provider: LoggingService, useValue: loggingServiceSpy }
      ]
    })

    // service = TestBed.inject(AccountsDataService)
    service = new AccountsDataService(loggingServiceSpy)
  })

  it('should have an array of accounts', async () => {
    const accounts = await service.getAccounts()
    expect(Array.isArray(accounts)).toBe(true)
  }, 2000)
})
