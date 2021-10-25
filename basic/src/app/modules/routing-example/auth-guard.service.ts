import { Injectable } from "@angular/core"
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"

import { AuthService } from "./auth.service"


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor (
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return true
        } else {
          this.router.navigate(['routing'])
        }
      })

  }

  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

    return this.canActivate(route, state)
  }

}
