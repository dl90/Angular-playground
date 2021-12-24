import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-lifecycle-example',
  templateUrl: './lifecycle-example.component.html'
})
// DoCheck,
export class LifecycleExampleComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  timeStamp: number
  changeCounter: number
  input: string

  constructor() {
    this.timeStamp = Date.now()
    this.changeCounter = 0

    console.log(`constructor T: ${Date.now() - this.timeStamp}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked T: ${Date.now() - this.timeStamp}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy T: ${Date.now() - this.timeStamp}`)
  }
}
