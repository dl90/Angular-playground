import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DirectivesExampleComponent } from './directives-example.component'


const routes: Routes = [
  { path: '', component: DirectivesExampleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesExampleRoutingModule { }
