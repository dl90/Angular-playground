import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Data, Params, Router } from '@angular/router'
import { Subscription } from 'rxjs'

import { ServersService, Server } from '../servers.service'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit, OnDestroy {
  server: Server
  idParamSubscription: Subscription

  constructor(
    // private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id'])
    // this.idParamSubscription = this.activatedRoute.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id'])
    // })

    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data['server']
    })
  }

  ngOnDestroy(): void {
    // this.idParamSubscription.unsubscribe()
  }

  onEdit(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }
}
