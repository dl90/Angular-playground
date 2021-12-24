import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ObservableExampleComponent } from './observable-example.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {
    path: '',
    component: ObservableExampleComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'user/:id', component: UserComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableExampleRouter {}
