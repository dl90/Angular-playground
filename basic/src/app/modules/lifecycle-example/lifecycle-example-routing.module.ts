import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LifecycleExampleComponent } from './lifecycle-example.component'


const routes: Routes = [
  { path: '', component: LifecycleExampleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleExampleRoutingModule { }
