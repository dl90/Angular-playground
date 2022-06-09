import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'

import { addTask, deleteTask, loadTaskList } from '../store/list/list.action'
import {
  selectTasks,
  selectStatus,
  selectError
} from '../store/list/list.selector'

interface TaskForm {
  task: FormControl<string>
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$ = this.store.select(selectTasks)
  status$ = this.store.select(selectStatus)
  error$ = this.store.select(selectError)
  taskForm = new FormGroup<TaskForm>({
    task: new FormControl('', { nonNullable: true })
  })

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTaskList())
  }

  addTask(): void {
    const task = this.taskForm.getRawValue().task.trim()
    if (task && task.length > 0) {
      this.store.dispatch(addTask({ task }))
      this.taskForm.reset()
    }
  }

  deleteTask(task: string): void {
    this.store.dispatch(deleteTask({ task }))
  }
}
