import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 1
  serverStatus = Math.random() > 0.5 ? 'online' : 'offline'

  constructor () { }

  ngOnInit (): void { }

  getColor () {
    return this.serverStatus === 'online' ? '#0d6efd' : '#fd7e14'
  }
}
