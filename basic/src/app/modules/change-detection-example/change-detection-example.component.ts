import { Component } from '@angular/core'

// https://blog.angular-university.io/onpush-change-detection-how-it-works/
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
  newMessage: string
  changeCounter = 0
  renderCounter = 0

  constructor() { }

  onInput(event: any): void {
    this.newMessage = event.target.value
  }

  async onChangeMessage(): Promise<void> {
    this.messages[0].msg = this.newMessage

    for (const msg of this.messages)
      msg.msg = await new Promise(resolve => setTimeout(() => resolve(this.newMessage), 1000))

  }

  onChange(): void {
    this.changeCounter++
    console.log('change', this.changeCounter)
  }

  onRender(): void {
    this.renderCounter++
    console.log('render', this.renderCounter)
  }
}
