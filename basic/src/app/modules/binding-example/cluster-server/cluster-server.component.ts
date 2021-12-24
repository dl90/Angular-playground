import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cluster-server',
  templateUrl: './cluster-server.component.html',
  styleUrls: ['./cluster-server.component.css']
})
export class ClusterServerComponent {
  @Input('server') element: { type: string; name: string; content: string }
}
