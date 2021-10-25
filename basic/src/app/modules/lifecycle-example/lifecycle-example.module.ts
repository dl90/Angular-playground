import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LifecycleExampleComponent } from './lifecycle-example.component'
import { LifecycleExampleRoutingModule } from './lifecycle-example-routing.module'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    LifecycleExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LifecycleExampleRoutingModule
  ]
})
export class LifecycleExampleModule { }
