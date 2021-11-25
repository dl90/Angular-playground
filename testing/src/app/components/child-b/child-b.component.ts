import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBComponent {
  @Input() post!: { userId: number; id: number; title: string; body: string }
  @Output() selected = new EventEmitter<number>()

  constructor() {}

  click(): void {
    this.selected.emit(this.post.id)
  }
}
