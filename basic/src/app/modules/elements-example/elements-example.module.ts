import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ElementsExampleComponent } from './elements-example.component'
import { CompComponent } from './comp/comp.component'

const routes: Routes = [{ path: '', component: ElementsExampleComponent }]

@NgModule({
  declarations: [ElementsExampleComponent, CompComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
  // entryComponents: [CompComponent]
})
export class ElementsExampleModule {}
