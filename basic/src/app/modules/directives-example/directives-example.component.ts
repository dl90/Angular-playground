import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html'
})
export class DirectivesExampleComponent implements OnInit {

  numbers = [1, 2, 3]
  oddToggle = false;
  input = ''

  constructor () { }

  ngOnInit (): void { }

}
