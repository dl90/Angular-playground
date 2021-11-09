import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { LifecycleExampleComponent } from './lifecycle-example.component'
import { FormsModule } from '@angular/forms'


const routes: Routes = [
  { path: '', component: LifecycleExampleComponent }
]


@NgModule({
  declarations: [
    LifecycleExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LifecycleExampleModule { }
