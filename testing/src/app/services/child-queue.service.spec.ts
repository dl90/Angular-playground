import { TestBed } from '@angular/core/testing'

import { ChildQueueService } from './child-queue.service'

describe('ChildQueueService', () => {
  let service: ChildQueueService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ChildQueueService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should be empty on instantiation', () => {
    expect(service.size()).toBe(0)
    expect(service.dequeue()).toBeUndefined()
  })

  it('#enqueue() should work', () => {
    service.enqueue(1)
    expect(service.size()).toBe(1)
  })

  it('#dequeue() should work', () => {
    service.enqueue(1)
    expect(service.dequeue()).toBe(1)
    expect(service.size()).toBe(0)
  })

  it('#peek() should work', () => {
    service.enqueue(1)
    expect(service.peek()).toBe(1)
  })
})
