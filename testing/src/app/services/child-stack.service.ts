import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ChildStackService {
  private stack: number[] = []

  push(num: number) {
    this.stack.push(num)
  }

  peek(): number | undefined {
    return this.stack[this.stack.length - 1]
  }

  pop(): number | undefined {
    return this.stack.pop()
  }

  size(): number {
    return this.stack.length
  }
}
