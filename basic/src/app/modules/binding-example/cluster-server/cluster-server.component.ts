import { Component, Input, OnInit } from '@angular/core'


@Component({
  selector: 'app-cluster-server',
  templateUrl: './cluster-server.component.html',
  styleUrls: ['./cluster-server.component.css']
})
export class ClusterServerComponent implements OnInit {

  @Input('server') element: { type: string, name: string, content: string }

  constructor() { }

  ngOnInit(): void { }

}
