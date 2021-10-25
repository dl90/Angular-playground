import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html'
})
export class BindingExampleComponent implements OnInit {

  allowNewServer = false
  createServerStatus: string
  serverName: string
  servers = [
    { serverId: 1, serverName: 'Server 1' },
    { serverId: 2, serverName: 'Server 2' },
    { serverId: 3, serverName: 'Server 3' },
    { serverId: 4, serverName: 'Server 4' },
  ]
  serverElements = [
    { type: 'server', name: 'Server 1', content: 'This is server 1' },
  ]

  constructor () { }

  ngOnInit (): void {
    setTimeout(() => this.allowNewServer = true, 1000)
  }

  onCreateServer () {
    this.allowNewServer = false
    setTimeout(() => {
      this.servers.push({ serverId: this.servers.length, serverName: this.serverName })
      this.createServerStatus = 'Server was created!'
      this.serverName = ''
    }, 1000)

    setTimeout(() => {
      this.createServerStatus = ''
      this.allowNewServer = true
    }, 3000)
  }

  updateServerName (event: any) {
    this.serverName = event.target.value
  }

  onServerAdded (serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded (blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    })
  }

  show = false
  history = []

  toggle (event: any) {
    this.history.push(event.timeStamp)
    this.show = !this.show
  }

}
