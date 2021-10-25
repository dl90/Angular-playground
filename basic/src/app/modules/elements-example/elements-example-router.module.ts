import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ElementsExampleComponent } from './elements-example.component'


const routes: Routes = [
  { path: '', component: ElementsExampleComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsExampleRouterModule { }
