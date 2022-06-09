import { createSelector, createFeatureSelector } from '@ngrx/store'
import { ListState } from './list.reducer'

export const selectList = createFeatureSelector<ListState>('list')

export const selectTasks = createSelector(
  selectList,
  (state: ListState) => state.tasks
)

export const selectStatus = createSelector(
  selectList,
  (state: ListState) => state.status
)

export const selectError = createSelector(
  selectList,
  (state: ListState) => state.error
)
