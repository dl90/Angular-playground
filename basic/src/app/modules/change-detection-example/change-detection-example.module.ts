import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ChangeDetectionExampleComponent } from './change-detection-example.component'
import { ChildComponent } from './child/child.component'
import { DefaultComponent } from './default/default.component'
import { OnpushComponent } from './onpush/onpush.component'
import { ObservableOnpushComponent } from './observable-onpush/observable-onpush.component'

const routes: Routes = [{ path: '', component: ChangeDetectionExampleComponent }]

@NgModule({
  declarations: [
    ChangeDetectionExampleComponent,
    ChildComponent,
    DefaultComponent,
    OnpushComponent,
    ObservableOnpushComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ChangeDetectionExampleModule {}
