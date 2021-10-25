import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ElementsExampleRouterModule } from './elements-example-router.module'
import { ElementsExampleComponent } from './elements-example.component'
import { CompComponent } from './comp/comp.component'


@NgModule({
  declarations: [
    ElementsExampleComponent,
    CompComponent
  ],
  imports: [
    CommonModule,
    ElementsExampleRouterModule
  ],
  // entryComponents: [CompComponent]
})
export class ElementsExampleModule { }
