import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Game } from 'src/app/models/game.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  private sub$: Subject<void> = new Subject();
  private timer!: ReturnType<typeof setTimeout>;

  gameId!: string;
  game!: Game;
  rating = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.sub$))
      .subscribe((params: Params) => (this.gameId = params.gameId));

    this.apiService
      .getGame(this.gameId)
      ?.pipe(takeUntil(this.sub$))
      .subscribe((info) => {
        this.game = info
        this.timer = setTimeout(
          () => (this.rating = this.game?.metacritic || 0),
          800
        );
      });
  }

  ngOnDestroy(): void {
    this.sub$.next();
    this.sub$.complete();
    clearTimeout(this.timer);
  }

  getColor(n: number): string {
    if (n >= 75) {
      return '#72d47e';
    } else if (n >= 50) {
      return 'FEA000';
    } else {
      return 'E00000';
    }
  }
}
