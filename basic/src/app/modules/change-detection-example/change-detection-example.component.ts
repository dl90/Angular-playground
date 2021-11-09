import { Component } from '@angular/core'


@Component({
  selector: 'app-change-detection-example',
  templateUrl: './change-detection-example.component.html'
})
export class ChangeDetectionExampleComponent {

  messages = [
    { msg: 'msg 1' },
    { msg: 'msg 2' },
    { msg: 'msg 3' }
  ]
  changeCounter = 0
  renderCounter = 0

  constructor() { }

  onInput(): void {
    console.log('input')
  }

  onChange(): void {
    this.changeCounter++
    console.log('change', this.changeCounter)
  }

  onRender(): void {
    this.renderCounter++
    console.log('render', this.renderCounter)
  }

  onChangeMessage(): void {
    this.messages[0].msg = 'new msg'
    console.log(this.messages)
  }
}
