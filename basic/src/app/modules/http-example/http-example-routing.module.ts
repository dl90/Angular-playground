import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HttpExampleComponent } from './http-example.component'


const routes: Routes = [
  { path: '', component: HttpExampleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpExampleRoutingModule { }
