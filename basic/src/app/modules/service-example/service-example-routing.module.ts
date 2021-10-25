import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ServiceExampleComponent } from './service-example.component'


const routes: Routes = [
  { path: '', component: ServiceExampleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceExampleRoutingModule { }
