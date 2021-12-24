import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() server!: { serverId: number; serverName: string }
  @Output() delete = new EventEmitter<string>()
  serverStatus = Math.random() > 0.5 ? 'online' : 'offline'

  getColor() {
    return this.serverStatus === 'online' ? '#0d6efd' : '#fd7e14'
  }

  onClick() {
    this.delete.emit(this.server.serverId + '-' + this.server.serverName)
  }
}
