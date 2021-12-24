import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // trigger changer detection only when @Input changes
})
export class OnpushComponent {
  @Input() foo: { bar: string; baz: string; lastChanged: () => Date }
}
