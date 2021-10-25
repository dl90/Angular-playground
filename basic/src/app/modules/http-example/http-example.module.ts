import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { PostService } from './post.service'
import { HttpExampleRoutingModule } from './http-example-routing.module'
import { HttpExampleComponent } from './http-example.component'
import { InterceptorsProvider } from './interceptors/interceptors-provider'


@NgModule({
  declarations: [
    HttpExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpExampleRoutingModule
  ],
  providers: [
    PostService,
    InterceptorsProvider
  ]
})
export class HttpExampleModule { }
