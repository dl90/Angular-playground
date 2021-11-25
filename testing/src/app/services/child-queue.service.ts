import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ChildQueueService {
  private q: number[] = []
  private idx = 0

  enqueue(num: number): void {
    this.q.push(num)
  }

  dequeue(): number | undefined {
    if (this.idx > this.q.length - 1) {
      this.q.length = 0
      this.idx = 0
      return undefined
    }

    return this.q[this.idx++]
  }

  peek(): number | undefined {
    return this.q[this.idx]
  }

  size(): number {
    return this.q.length - this.idx
  }
}
