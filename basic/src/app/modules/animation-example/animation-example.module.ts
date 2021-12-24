import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { AnimationExampleComponent } from './animation-example.component'

const routes: Routes = [{ path: '', component: AnimationExampleComponent }]

@NgModule({
  declarations: [AnimationExampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AnimationExampleModule {}
