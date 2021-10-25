import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ZoneExampleComponent } from './zone-example.component'


const routes: Routes = [
  { path: '', component: ZoneExampleComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneExampleRoutingModule { }
