import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'

import { ClusterFormComponent } from './cluster-form/cluster-form.component'


@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html'
})
export class BindingExampleComponent implements OnInit, AfterViewInit {

  @ViewChild(ClusterFormComponent) clusterForm: ClusterFormComponent

  allowNewServer = false
  createServerStatus: string
  serverName: string
  servers = [
    { serverId: 1, serverName: 'Server a' },
    { serverId: 2, serverName: 'Server b' },
    { serverId: 3, serverName: 'Server c' },
    { serverId: 4, serverName: 'Server d' },
  ]
  private serverId = 5
  serverElements = [
    { type: 'server', name: 'Server 1', content: 'This is server 1' },
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.allowNewServer = true, 1000)
  }

  ngAfterViewInit(): void {
  }

  onCreateServer() {
    this.allowNewServer = false
    setTimeout(() => {
      this.servers.push({ serverId: this.serverId++, serverName: this.serverName })
      this.createServerStatus = 'Server was created!'
      this.serverName = ''
    }, 1000)

    setTimeout(() => {
      this.createServerStatus = ''
      this.allowNewServer = true
    }, 3000)
  }

  onDeleteServer(serverHash: string) {
    this.servers = this.servers.filter(server => server.serverId + "-" + server.serverName !== serverHash)
  }

  updateServerName(event: any) {
    this.serverName = event.target.value
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    })
  }

  show = false
  history = []

  toggle(event: any) {
    this.history.push(event.timeStamp)
    this.show = !this.show
  }

}
