import { createAction, props } from '@ngrx/store'

export const loadTaskList = createAction('[List] Load Task List')
export const loadTaskListSuccess = createAction(
  '[List] Load Task List Success',
  props<{ tasks: string[] }>()
)
export const loadTaskListFailure = createAction(
  '[List] Load Task List Failure',
  props<{ error: any }>()
)
export const saveTaskListSuccess = createAction('[List] Save Task List Success')
export const saveTaskListFailure = createAction(
  '[List] Save Task List Failure',
  props<{ error: any }>()
)
export const addTask = createAction(
  '[List] Add Task',
  props<{ task: string }>()
)
export const deleteTask = createAction(
  '[List] Delete Task',
  props<{ task: string }>()
)
