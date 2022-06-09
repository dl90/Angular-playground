import { createReducer, on } from '@ngrx/store'
import {
  addTask,
  deleteTask,
  loadTaskList,
  loadTaskListSuccess,
  loadTaskListFailure,
  saveTaskListFailure,
  saveTaskListSuccess
} from './list.action'

export interface ListState {
  tasks: ReadonlyArray<string>
  error: any
  status: 'pending' | 'loading' | 'success' | 'error'
}

export const initialState: ListState = {
  tasks: [],
  error: null,
  status: 'pending'
}

export const listReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => {
    if (state.tasks.includes(task)) {
      return state
    }

    return {
      ...state,
      tasks: [...state.tasks, task]
    }
  }),
  on(deleteTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.filter((t) => t !== task)
  })),
  on(loadTaskList, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(loadTaskListSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    error: null,
    status: 'success'
  })),
  on(loadTaskListFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    status: 'loading'
  })),
  on(saveTaskListSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  on(saveTaskListFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    status: 'pending'
  }))
)
