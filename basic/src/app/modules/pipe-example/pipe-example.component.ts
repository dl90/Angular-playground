import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

interface Server {
  instanceType: string
  name: string
  status: string
  started: Date
}


@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: []
})
export class PipeExampleComponent implements OnInit {

  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ]
  statusFilter: string
  newServerForm: FormGroup
  appStatus: Promise<string>

  constructor () { }

  ngOnInit (): void {
    this.newServerForm = new FormGroup({
      instanceType: new FormControl('small'),
      name: new FormControl(null),
      status: new FormControl('offline'),
      started: new FormControl(null)
    })

    this.appStatus = new Promise(resolve => {
      setTimeout(() => {
        resolve('stable')
      }, 2000)
    })
  }

  getStatusClasses (server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }

  onAddServer () {
    this.servers.push({
      instanceType: this.newServerForm.value.instanceType,
      name: this.newServerForm.value.name,
      status: this.newServerForm.value.status,
      started: this.newServerForm.value.started
    })

    this.newServerForm.reset({
      instanceType: 'small',
      status: 'offline',
    })
  }

}
