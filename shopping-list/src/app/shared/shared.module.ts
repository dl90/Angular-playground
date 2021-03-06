import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AlertComponent } from './alert/alert.component'
import { DropdownDirective } from './directives/dropdown.directive'
import { PlaceholderDirective } from './directives/placeholder.directive'


@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective
  ]
})
export class SharedModule { }
