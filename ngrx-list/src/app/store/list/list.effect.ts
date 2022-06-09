import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import {
  catchError,
  exhaustMap,
  map,
  of,
  switchMap,
  tap,
  debounceTime,
  retry,
  distinctUntilChanged
} from 'rxjs'

import { AppState } from '../app.state'
import { ListService } from 'src/app/list/list.service'
import {
  addTask,
  deleteTask,
  loadTaskList,
  loadTaskListFailure,
  loadTaskListSuccess,
  saveTaskListFailure,
  saveTaskListSuccess
} from './list.action'
import { selectTasks } from './list.selector'

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private listService: ListService
  ) {}

  loadTaskList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTaskList),
      exhaustMap(() =>
        this.listService.getTaskList().pipe(
          map((list) => loadTaskListSuccess({ tasks: list })),
          catchError((error) => of(loadTaskListFailure({ error })))
          // tap(console.log)
        )
      )
    )
  )

  loadTaskListFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTaskListFailure),
      exhaustMap(() =>
        this.listService.getTaskList().pipe(
          map((list) => loadTaskListSuccess({ tasks: list })),
          debounceTime(2000),
          retry(2),
          catchError((error) => of(loadTaskListFailure({ error })))
        )
      )
    )
  )

  saveTaskList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTask, deleteTask),
        concatLatestFrom((_action) => this.store.select(selectTasks)),
        // tap(console.log),
        distinctUntilChanged((prev, curr) => prev[1].length === curr[1].length),
        switchMap(([_action, tasks]) =>
          this.listService.saveTaskList(tasks).pipe(
            map(() => of(this.store.dispatch(saveTaskListSuccess()))),
            catchError((error) =>
              of(this.store.dispatch(saveTaskListFailure({ error })))
            )
            // tap(console.log)
          )
        )
      ),
    { dispatch: false }
  )

  saveTaskListFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveTaskListFailure),
        concatLatestFrom((_action) => this.store.select(selectTasks)),
        switchMap(([_action, tasks]) =>
          this.listService.saveTaskList(tasks).pipe(
            map(() => of(this.store.dispatch(saveTaskListSuccess()))),
            debounceTime(1000),
            retry(2),
            catchError((error) =>
              of(this.store.dispatch(saveTaskListFailure({ error })))
            )
          )
        )
      ),
    { dispatch: false }
  )
}
