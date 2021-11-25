import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message: { msg: string }
  @Output() changed = new EventEmitter()
  @Output() rendered = new EventEmitter()
  private _interval: ReturnType<typeof setInterval>

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this._changeDetectorRef.detach()
    // this._changeDetectorRef.reattach()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes.message.currentValue)
    this.changed.emit()
  }

  ngOnDestroy(): void {
    this._interval && clearInterval(this._interval)
  }

  onPoke(): void {
    this.message.msg = 'poked'
  }

  onPoll(): void {
    this._interval = setInterval(() => {
      this._changeDetectorRef.detectChanges()
    }, 1000)
  }

  onRender(): void {
    console.log('rendered')
    // this.rendered.emit()
  }

}
