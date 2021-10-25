import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { RoutingExampleRoutingModule } from './routing-example-routing.module'
import { ServersService } from './servers/servers.service'
import { AuthService } from './auth.service'
import { AuthGuardService } from './auth-guard.service'
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service'
import { ServerResolverService } from './servers/server/server-resolver.service'

import { RoutingExampleComponent } from './routing-example.component'
import { HomeComponent } from './home/home.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './servers/server/server.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { UsersComponent } from './users/users.component'
import { UserComponent } from './users/user/user.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ErrorComponent } from './error/error.component'


@NgModule({
  declarations: [
    RoutingExampleComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingExampleRoutingModule,
  ],
  providers: [
    ServersService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService,
    ServerResolverService
  ],
})
export class RoutingExampleModule { }
