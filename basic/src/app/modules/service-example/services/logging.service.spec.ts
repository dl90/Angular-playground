import { LoggingService } from './logging.service'


describe('Logging service', () => {
  let service: LoggingService

  beforeEach(() => {
    service = new LoggingService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

})
