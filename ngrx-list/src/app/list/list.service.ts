import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private store: Store) {}

  getTaskList(): Observable<string[]> {
    return new Observable((observer) => {
      let rand = Math.random()

      setTimeout(() => {
        if (rand < 0.5) {
          observer.error(new Error('failed to load list'))
        } else {
          observer.next(['Task 1', 'Task 2', 'Task 3'])
        }
      }, rand * 1000)
    })
  }

  saveTaskList(list: ReadonlyArray<string>): Observable<boolean> {
    return new Observable((observer) => {
      let rand = Math.random()

      setTimeout(() => {
        if (rand < 0.5) {
          console.log('failed to save')
          observer.error(new Error('failed to save list'))
        } else {
          console.log(`saved: ${list}`)
          observer.next(true)
        }
      }, rand * 1000)
    })
  }
}
