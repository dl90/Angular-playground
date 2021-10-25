import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { DirectivesExampleRoutingModule } from './directives-example-routing.module'
import { DirectivesExampleComponent } from './directives-example.component'
import { ExampleDirective } from './exampleDirective/example-directive.directive'
import { ExampleDirective2 } from './exampleDirective2/example-directive2.directive'
import { IfNotDirective } from './structuralDirective/if-not.directive'


@NgModule({
  declarations: [
    DirectivesExampleComponent,
    ExampleDirective,
    ExampleDirective2,
    IfNotDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesExampleRoutingModule
  ]
})
export class DirectivesExampleModule { }
