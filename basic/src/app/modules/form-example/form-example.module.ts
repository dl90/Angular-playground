import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormExampleRoutingModule } from './form-example-routing.module'
import { FormExampleComponent } from './form-example.component'
import { TemplateComponent } from './template/template.component'
import { ReactiveComponent } from './reactive/reactive.component'
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component'

@NgModule({
  declarations: [
    FormExampleComponent,
    TemplateComponent,
    ReactiveComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormExampleRoutingModule]
})
export class FormExampleModule {}
