import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PipeExampleRouterModule } from './pipe-example-router.module'
import { ShortenPipe } from './pipes/shorten.pipe'
import { FilterPipe } from './pipes/filter.pipe'
import { ReversePipe } from './pipes/reverse.pipe'
import { SortPipe } from './pipes/sort.pipe'
import { PipeExampleComponent } from './pipe-example.component'


@NgModule({
  declarations: [
    PipeExampleComponent,

    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeExampleRouterModule
  ],
})
export class PipeExampleModule { }
