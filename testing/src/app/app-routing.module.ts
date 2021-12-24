import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ParentComponent } from './components/parent/parent.component'

const routes: Routes = [{ path: '', component: ParentComponent, pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
