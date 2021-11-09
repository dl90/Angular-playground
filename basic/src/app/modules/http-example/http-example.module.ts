import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { PostService } from './post.service'
import { HttpExampleComponent } from './http-example.component'
import { InterceptorsProvider } from './interceptors/interceptors-provider'


const routes: Routes = [
  { path: '', component: HttpExampleComponent }
]


@NgModule({
  declarations: [
    HttpExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PostService,
    InterceptorsProvider
  ]
})
export class HttpExampleModule { }
