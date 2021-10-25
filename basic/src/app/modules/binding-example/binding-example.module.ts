import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { BindingExampleComponent } from './binding-example.component'
import { ServerComponent } from './server/server.component'
import { ClusterServerComponent } from './cluster-server/cluster-server.component'
import { ClusterFormComponent } from './cluster-form/cluster-form.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BindingExampleComponent,
  }
]


@NgModule({
  declarations: [
    BindingExampleComponent,
    ServerComponent,
    ClusterServerComponent,
    ClusterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BindingExampleModule { }
