import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html'
})
export class CompComponent {
  @Input() message = 'hello'
}
