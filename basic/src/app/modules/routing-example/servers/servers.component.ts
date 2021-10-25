import { Component, OnInit } from '@angular/core'

import { ServersService, Server } from './servers.service'


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: []
})
export class ServersComponent implements OnInit {

  servers: Server[]

  constructor (private serversService: ServersService) { }

  ngOnInit (): void {
    this.servers = this.serversService.getServers()
    this.serversService.updateEventEmitter.subscribe(() => {
      this.servers = this.serversService.getServers()
    })
  }

}
