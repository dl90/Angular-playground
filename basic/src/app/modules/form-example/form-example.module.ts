import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'          // template
import { ReactiveFormsModule } from '@angular/forms'  // reactive

import { FormExampleRoutingModule } from './form-example-routing.module'

import { FormExampleComponent } from './form-example.component'
import { TemplateComponent } from './template/template.component'
import { ReactiveComponent } from './reactive/reactive.component'


@NgModule({
  declarations: [
    FormExampleComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormExampleRoutingModule
  ]
})
export class FormExampleModule { }
