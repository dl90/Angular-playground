import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html'
})
export class CompComponent implements OnInit {

  @Input() message = 'hello'

  constructor () { }

  ngOnInit (): void { }

}
