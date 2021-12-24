import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core'
import { catchError, debounceTime, filter, fromEvent, map, switchAll, tap } from 'rxjs'

import { SearchResult, YTSearchService } from '../../../services/yt-search.service'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>()

  constructor(private ytSearchService: YTSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(500),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.ytSearchService.search(query)),
        switchAll(),
        tap((results: SearchResult[]) => {
          this.loading.emit(false)
          this.results.emit(results)
        }),
        catchError((err: any) => {
          this.loading.emit(false)
          console.error(err)
          return []
        })
      )
      .subscribe()
  }
}
