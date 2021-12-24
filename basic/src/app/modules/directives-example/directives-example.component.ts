import { Component } from '@angular/core'

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html'
})
export class DirectivesExampleComponent {
  numbers = [1, 2, 3]
  oddToggle = false
  input = ''
}
