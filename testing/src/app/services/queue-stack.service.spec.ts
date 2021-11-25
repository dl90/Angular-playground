import { TestBed } from '@angular/core/testing'

import { ChildQueueService } from './child-queue.service'
import { ChildStackService } from './child-stack.service'
import { QueueStackService } from './queue-stack.service'

describe('QueueStackService', () => {
  let service: QueueStackService
  let childQueueService: ChildQueueService
  let childStackService: ChildStackService

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [QueueStackService] })
    service = TestBed.inject(QueueStackService)
    childQueueService = TestBed.inject(ChildQueueService)
    childStackService = TestBed.inject(ChildStackService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#foo() should work', () => {
    expect(service.foo()).toBe(10)
  })

  it('#enqueue() should work', () => {
    expect(service.enqueue(1)).toBe(1)
    expect(service.enqueue(2)).toBe(2)
    expect(childQueueService.size()).toBe(2)
  })

  it('#dequeue() should work', () => {
    service.enqueue(1)
    service.enqueue(2)
    expect(service.dequeue()).toBe(1)
    expect(childQueueService.size()).toBe(1)
  })

  it('#push() should work', () => {
    expect(service.push(1)).toBe(1)
    expect(service.push(2)).toBe(2)
    expect(childStackService.size()).toBe(2)
  })

  it('#pop() should work', () => {
    service.push(1)
    service.push(2)
    expect(service.pop()).toBe(2)
    expect(childStackService.size()).toBe(1)
  })

  it('#enqueue() #dequeue() should return stubbed value from spy', () => {
    const enqueueStubValue = 10
    const dequeueStubValue = 123
    const childQueueServiceSpy = jasmine.createSpyObj('ChildQueueService', [
      'enqueue',
      'dequeue',
      'size'
    ])
    childQueueServiceSpy.enqueue.and.returnValue(enqueueStubValue)
    childQueueServiceSpy.dequeue.and.returnValue(dequeueStubValue)
    childQueueServiceSpy.size.and.returnValue(enqueueStubValue)

    service = new QueueStackService(
      childQueueServiceSpy,
      {} as ChildStackService
    )

    expect(service.enqueue(1)).toBe(enqueueStubValue)
    expect(childQueueServiceSpy.enqueue.calls.count()).toBe(1)
    expect(service.dequeue()).toBe(dequeueStubValue)
    expect(childQueueServiceSpy.dequeue.calls.count()).toBe(1)
  })

  it('#push() #pop() should return stubbed value from spy', () => {
    const pushStubValue = 10
    const popStubValue = 123
    const childStackServiceSpy = jasmine.createSpyObj('ChildStackService', [
      'push',
      'pop'
    ])
    childStackServiceSpy.push.and.returnValue(pushStubValue)
    childStackServiceSpy.pop.and.returnValue(popStubValue)

    service = new QueueStackService(
      {} as ChildQueueService,
      childStackServiceSpy
    )

    // replaces push call
    spyOn(service, 'push').and.callFake((value) => {
      return pushStubValue
    })

    expect(service.push(1)).toBe(pushStubValue)
    expect(childStackServiceSpy.push.calls.count()).toBe(0)
    expect(service.pop()).toBe(popStubValue)
    expect(childStackServiceSpy.pop.calls.count()).toBe(1)
  })
})
