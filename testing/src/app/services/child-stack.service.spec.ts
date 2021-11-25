import { TestBed } from '@angular/core/testing'

import { ChildStackService } from './child-stack.service'

describe('ChildStackService', () => {
  let service: ChildStackService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ChildStackService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should be empty on instantiation', () => {
    expect(service.size()).toBe(0)
    expect(service.pop()).toBeUndefined()
  })

  it('#push() should work', () => {
    service.push(1)
    expect(service.size()).toBe(1)
  })

  it('#pop() should work', () => {
    service.push(1)
    expect(service.pop()).toBe(1)
    expect(service.size()).toBe(0)
  })

  it('#peek() should work', () => {
    service.push(1)
    expect(service.peek()).toBe(1)
    service.pop()
    expect(service.peek()).toBeUndefined()
  })
})
