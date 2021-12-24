import { Injectable } from '@angular/core'

export interface Metric {
  event: string
  scope: string
}

export interface IImplement {
  recordEvent(metric: Metric): void
}

@Injectable()
export class InjectFactoryService {
  // implementation needs provider
  constructor(private implementation: IImplement) {}

  record(metric: Metric): void {
    this.implementation.recordEvent(metric)
  }
}
