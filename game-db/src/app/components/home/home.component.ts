import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { Game } from 'src/app/models/game.interface'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub$: Subject<void> = new Subject()
  games$!: Observable<Game[]>

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.sub$))
      .subscribe((params: Params) => this.load(params.q))
  }

  ngOnDestroy(): void {
    this.sub$.next()
    this.sub$.complete()
  }

  viewDetails(gameId: number): void {
    this.router.navigate(['/game', gameId])
  }

  private load(query: string): void {
    this.apiService.getGameList(query)
    this.games$ = this.apiService.games$
  }
}
