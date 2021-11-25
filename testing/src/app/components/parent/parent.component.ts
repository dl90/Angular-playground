import { Component, OnDestroy, OnInit } from '@angular/core'
import { catchError, Observable, of, startWith, Subject, takeUntil } from 'rxjs'

import { HttpService } from 'src/app/services/http.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>()
  posts!: Array<{ userId: number; id: number; title: string; body: string }>
  delayedMessage$!: Observable<string>
  loadingMessage = 'loading...'

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getPosts()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((data) => (this.posts = data))

    this.getMessage()
  }

  ngOnDestroy(): void {
    this._onDestroy.next()
    this._onDestroy.complete()
  }

  onSelect(id: number): void {
    console.log(id)
  }

  getMessage(): void {
    this.delayedMessage$ = this.httpService.delayedMessage(2000).pipe(
      startWith(this.loadingMessage),
      catchError((err: any) => {
        console.error(err)
        return of('An error occurred')
      }),
      takeUntil(this._onDestroy)
    )
  }
}
