import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { FormExampleComponent } from "./form-example.component"
import { TemplateComponent } from "./template/template.component"
import { ReactiveComponent } from "./reactive/reactive.component"


const routes: Routes = [
  {
    path: '', component: FormExampleComponent,
    children: [
      { path: '', redirectTo: 'template' },
      { path: 'template', component: TemplateComponent },
      { path: 'reactive', component: ReactiveComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormExampleRoutingModule { }
