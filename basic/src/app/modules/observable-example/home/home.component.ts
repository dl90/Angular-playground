import { Component, OnDestroy, OnInit } from '@angular/core'
import { interval, Subscription, Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit, OnDestroy {

  private _interval: Subscription
  private _customInterval: Subscription

  constructor () { }

  ngOnInit (): void {

    const customInterval = function (period: number, limit: number) {
      if (period < 0)
        throw new Error('Period must be greater than zero')

      return new Observable(observer => {
        let count = 0
        const intervalRef = setInterval(() => {
          if (count > limit + 1) {
            clearInterval(intervalRef)
            observer.error('exceeded limit')
          }

          if (count >= limit) {
            clearInterval(intervalRef)
            observer.complete()
          } else {
            observer.next(count++)
          }

        }, period)
      })
    }

    this._interval = interval(1000)
      .pipe(
        filter((count: number) => count % 2 === 0),
        map((count: number) => `interval: ${count}`)
      )
      .subscribe(console.log)

    this._customInterval = customInterval(1000, 5)
      .pipe(
        map((count: number) => `customInterval: ${count}`)
      )
      .subscribe(console.log, console.error)
  }

  ngOnDestroy (): void {
    this._interval.unsubscribe()
    this._customInterval.unsubscribe()
  }

}
