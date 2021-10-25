import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core'


@Component({
  selector: 'app-lifecycle-example',
  templateUrl: './lifecycle-example.component.html'
})
export class LifecycleExampleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  timeStamp: number
  changeCounter: number
  @Input() input: string

  constructor () {
    this.timeStamp = Date.now()
    this.changeCounter = 0

    console.log(`constructor T: ${this.timeStamp - this.timeStamp}`)
  }

  ngOnInit (): void {
    console.log(`ngOnInit T: ${Date.now() - this.timeStamp}`)
  }

  // detect changes on bound properties (@Input)
  ngOnChanges (changes: SimpleChanges): void {
    this.changeCounter++;
    console.log(`ngOnChanges T: ${Date.now() - this.timeStamp}\t count: ${this.changeCounter}`)
    console.log(changes)
  }

  ngDoCheck (): void {
    console.log(`ngDoCheck T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterContentInit (): void {
    console.log(`ngAfterContentInit T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterContentChecked (): void {
    console.log(`ngAfterContentChecked T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterViewInit (): void {
    console.log(`ngAfterViewInit T: ${Date.now() - this.timeStamp}`)
  }

  ngAfterViewChecked (): void {
    console.log(`ngAfterViewChecked T: ${Date.now() - this.timeStamp}`)
  }

  ngOnDestroy (): void {
    console.log(`ngOnDestroy T: ${Date.now() - this.timeStamp}`)
  }
}
