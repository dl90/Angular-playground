import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  @Input() foo: { bar: string; baz: string; lastChanged: () => Date }
}
