import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message: { msg: string }
  private _interval: ReturnType<typeof setInterval>
  changeCounter = 0
  renderCounter = 0

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.cdr.detach()
    // this.cdr.reattach()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes.message.currentValue)
    this.changeCounter++
  }

  ngOnDestroy(): void {
    this._interval && clearInterval(this._interval)
  }

  onPoke(): void {
    this.message.msg = 'poked'
  }

  onPoll(): void {
    this._interval = setInterval(() => {
      this.cdr.detectChanges()
    }, 1000)
  }

  onRender(): void {
    this.renderCounter++
  }
}
