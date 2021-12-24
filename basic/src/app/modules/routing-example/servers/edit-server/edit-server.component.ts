import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { ServersService, Server } from '../servers.service'
import { CanComponentDeactivate } from './can-deactivate-guard.service'

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: []
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server
  serverName: string
  serverStatus: string
  allowEdit = false
  changesSave = false

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.queryParams, this.activatedRoute.snapshot.fragment)
    // this.activatedRoute.fragment.subscribe()
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false
    })

    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id'])
      this.serverName = this.server.name
      this.serverStatus = this.server.status
    })

    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id'])
    this.serverName = this.server.name
    this.serverStatus = this.server.status
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    })
    this.changesSave = true
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) return true

    if (
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSave
    )
      return confirm('Do you want to discard the changes?')

    return true
  }
}
