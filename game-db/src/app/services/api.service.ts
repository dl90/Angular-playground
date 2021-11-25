import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs'
import { map, retry } from 'rxjs/operators'

import { environment as env } from 'src/environments/environment'
import { APIResponse } from '../models/APIResponse.interface'
import { Game } from '../models/game.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  games$: Subject<Game[]> = new BehaviorSubject<Game[]>([])
  sort = '-added'
  sortOptions = [
    ['Name', 'name'],
    ['Released', '-released'],
    ['Added', '-added'],
    ['Created', '-created'],
    ['Updated', '-updated'],
    ['Rating', '-rating'],
    ['Metacritic', '-metacritic']
  ]

  constructor(private http: HttpClient) {}

  getGameList(search?: string): void {
    let params = new HttpParams().set('ordering', this.sort)
    if (search) params = params.append('search', search)

    this.http
      .get<APIResponse<Game>>(env.API_URL + '/games', { params })
      .pipe(
        retry(2),
        map((res: APIResponse<Game>) => res.results)
      )
      .subscribe((games) => {
        this.games$.next(games)
        console.log(games)
      })
  }

  getGame(id: string): Observable<any> | undefined {
    if (!id || isNaN(+id)) return

    const detail = this.http
      .get<APIResponse<any>>(env.API_URL + '/games/' + id)
      .pipe(retry(2))
    const tailers = this.http
      .get<APIResponse<any>>(env.API_URL + '/games/' + id + '/movies')
      .pipe(retry(2))
    const screenshots = this.http
      .get<APIResponse<any>>(env.API_URL + '/games/' + id + '/screenshots')
      .pipe(retry(2))

    return forkJoin([detail, tailers, screenshots]).pipe(
      map((results) => ({
        ...results[0],
        trailers: results[1].results || [],
        screenshots: results[2].results || []
      }))
    )
  }
}
