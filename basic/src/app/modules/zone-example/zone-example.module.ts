import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ZoneExampleRoutingModule } from './zone-example-routing.module'
import { ZoneExampleComponent } from './zone-example.component'


@NgModule({
  declarations: [
    ZoneExampleComponent
  ],
  imports: [
    CommonModule,
    ZoneExampleRoutingModule
  ]
})
export class ZoneExampleModule { }
