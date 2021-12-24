import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-observable-onpush',
  templateUrl: './observable-onpush.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableOnpushComponent implements OnInit {
  @Input() obs$: Observable<number>
  counter = 0

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obs$.subscribe(
      (n) => {
        this.counter++
        if (this.counter % 10 === 0) this.cdr.markForCheck()
      },
      null,
      () => this.cdr.markForCheck()
    )
  }
}
