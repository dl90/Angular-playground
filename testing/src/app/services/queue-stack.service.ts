import { Injectable } from '@angular/core'

import { ChildQueueService } from './child-queue.service'
import { ChildStackService } from './child-stack.service'

@Injectable({
  providedIn: 'root'
})
export class QueueStackService {
  sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private childQueueService: ChildQueueService,
    private childStackService: ChildStackService
  ) {}

  foo(): number | undefined {
    this.sequence.forEach((n) => this.childStackService.push(n))

    while (this.childStackService.peek())
      this.childQueueService.enqueue(this.childStackService.pop()!)

    return this.childQueueService.dequeue()
  }

  enqueue(num: number): number {
    this.childQueueService.enqueue(num)
    return this.childQueueService.size()
  }

  dequeue(): number | undefined {
    return this.childQueueService.dequeue()
  }

  push(num: number): number {
    this.childStackService.push(num)
    return this.childStackService.size()
  }

  pop(): number | undefined {
    return this.childStackService.pop()
  }
}
