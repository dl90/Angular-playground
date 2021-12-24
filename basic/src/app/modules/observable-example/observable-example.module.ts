import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ObservableExampleRouter } from './observable-example-routing.module'
import { UserService } from './user.service'

import { ObservableExampleComponent } from './observable-example.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [ObservableExampleComponent, HomeComponent, UserComponent],
  imports: [CommonModule, ObservableExampleRouter],
  providers: [UserService]
})
export class ObservableExampleModule {}
