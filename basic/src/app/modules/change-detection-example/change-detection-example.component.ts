import { AfterViewChecked, Component, OnInit } from '@angular/core'
import { Observable, take, timer } from 'rxjs'

@Component({
  selector: 'app-change-detection-example',
  templateUrl: './change-detection-example.component.html'
})
export class ChangeDetectionExampleComponent implements AfterViewChecked, OnInit {
  message = { msg: 'msg 1' }
  newMessage: string
  changeCounter = 0
  renderCounter = 0

  foo1 = { bar: 'bar1', baz: 'baz1', lastChanged: () => new Date() }
  foo2 = { bar: 'bar2', baz: 'baz2', lastChanged: () => new Date() }

  barObs$: Observable<number>

  ngOnInit(): void {
    // this.barObs$ = timer(1000, 1000).pipe(take(50))
  }

  onRender(): void {
    // this.renderCounter++
  }

  ngAfterViewChecked(): void {
    this.renderCounter++
  }

  onChangeMessage(): void {
    this.message = { msg: this.newMessage }
    this.changeCounter++
  }
}
