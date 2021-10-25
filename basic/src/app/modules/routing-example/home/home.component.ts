import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { AuthService } from '../auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit (): void { }

  onLoadServers (): void {
    // relativeTo: current route + /servers
    this.router.navigate(['../servers'], { relativeTo: this.activatedRoute })
  }

  onLoadServer (id: number): void {
    this.router.navigate(
      ['../servers', id, 'edit'],
      { queryParams: { allowEdit: '1' }, fragment: 'someFragment', relativeTo: this.activatedRoute }
    )
  }

  async onLogin (): Promise<void> {
    await this.authService.login()
    this.router.navigate(['../servers'], { relativeTo: this.activatedRoute })
  }

  onLogout (): void {
    this.authService.logout()
  }

}
