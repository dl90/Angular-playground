import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ChangeDetectionExampleComponent } from './change-detection-example.component'
import { ChildComponent } from './child/child.component'


const routes: Routes = [
  { path: '', component: ChangeDetectionExampleComponent }
]


@NgModule({
  declarations: [
    ChangeDetectionExampleComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangeDetectionExampleModule { }
