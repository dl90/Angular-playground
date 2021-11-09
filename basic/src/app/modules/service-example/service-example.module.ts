import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { LoggingService } from './services/logging.service'
import { AccountsDataService } from './services/accounts-data.service'
import { ServiceExampleComponent } from './service-example.component'
import { NewAccountComponent } from './new-account/new-account.component'
import { AccountComponent } from './account/account.component'


const routes: Routes = [
  { path: '', component: ServiceExampleComponent }
]


@NgModule({
  declarations: [
    ServiceExampleComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  /*
    # Injector hierarchy

    AppModule: application wide singleton
    AppComponent: component wide but not other services
    Component: component and child components
  */
  providers: [
    LoggingService,
    AccountsDataService
  ]
})
export class ServiceExampleModule { }
