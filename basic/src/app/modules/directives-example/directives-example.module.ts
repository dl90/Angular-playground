import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { DirectivesExampleComponent } from './directives-example.component'
import { ExampleDirective } from './directives/example-directive.directive'
import { ExampleDirective2 } from './directives/example-directive2.directive'
import { IfNotDirective } from './directives/if-not.directive'
import { PopupDirective } from './directives/popup.directive'
import { ComponentDirective } from './directives/component.directive'

const routes: Routes = [{ path: '', component: DirectivesExampleComponent }]

@NgModule({
  declarations: [
    DirectivesExampleComponent,
    ExampleDirective,
    ExampleDirective2,
    IfNotDirective,
    PopupDirective,
    ComponentDirective
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class DirectivesExampleModule {}
