import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { LifecycleExampleComponent } from './lifecycle-example.component'
import { FormsModule } from '@angular/forms'
import { ChildComponent } from './child/child.component'

const routes: Routes = [{ path: '', component: LifecycleExampleComponent }]

@NgModule({
  declarations: [LifecycleExampleComponent, ChildComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class LifecycleExampleModule {}
