import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: '[appComponentDirective]',
  template: `
    <div>
      <h3>{{ header }}</h3>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ComponentDirective {
  @Input() header: string
  @HostBinding('attr.class') cssClass = 'some-class' // binding to hosts class
}
