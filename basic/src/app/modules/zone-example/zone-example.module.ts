import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ZoneExampleComponent } from './zone-example.component'


const routes: Routes = [
  { path: '', component: ZoneExampleComponent }
]


@NgModule({
  declarations: [
    ZoneExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ZoneExampleModule { }
