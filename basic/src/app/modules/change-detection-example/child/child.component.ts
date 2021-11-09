import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  @Input() message: { msg: string }
  @Output() changed = new EventEmitter<void>()
  @Output() rendered = new EventEmitter<void>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('change', changes.message.currentValue)
    this.changed.emit()
  }

  onRender(): void {
    console.log('rendered')
    // this.rendered.emit()
  }

}
