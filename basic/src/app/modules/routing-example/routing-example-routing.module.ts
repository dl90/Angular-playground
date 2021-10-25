import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { AuthGuardService } from "./auth-guard.service"
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service"
import { ServerResolverService } from "./servers/server/server-resolver.service"

import { RoutingExampleComponent } from "./routing-example.component"
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { EditServerComponent } from "./servers/edit-server/edit-server.component"
import { ServersComponent } from "./servers/servers.component"
import { ServerComponent } from "./servers/server/server.component"
import { UserComponent } from "./users/user/user.component"
import { UsersComponent } from "./users/users.component"
import { ErrorComponent } from "./error/error.component"



const routes: Routes = [
  {
    path: '',
    component: RoutingExampleComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          { path: ':id/:name', component: UserComponent },
        ]
      },
      {
        path: 'servers',
        // canActivate: [AuthGuardService],   // whole route
        canActivateChild: [AuthGuardService], // child routes
        component: ServersComponent,
        children: [
          // resolver: executes prior to component loading
          { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
          {
            path: ':id/edit',
            canDeactivate: [CanDeactivateGuardService],
            component: EditServerComponent
          },
        ]
      },
      { path: 'not-found', component: ErrorComponent, data: { message: 'Page not found!' } },
      { path: '**', redirectTo: 'not-found' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExampleRoutingModule { }
