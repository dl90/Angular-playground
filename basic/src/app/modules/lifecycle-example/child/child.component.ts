import { Component, DoCheck, Input, KeyValueDiffers, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnChanges, DoCheck {
  @Input() input: string
  @Input() parentTimeStamp: number
  timeStamp: number
  differ: any

  constructor(differ: KeyValueDiffers) {
    this.timeStamp = Date.now()
    // this.differ = differ.find({}).create()
    console.log(`child constructor T: ${Date.now() - this.timeStamp}`)
  }

  // detect changes on bound properties (@Input)
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges T: ${Date.now() - this.timeStamp}`)
    console.log(changes)
  }

  // overrides ngOnChanges (ngOnChanges will be ignored)
  ngDoCheck(): void {
    console.log(`ngDoCheck T: ${Date.now() - this.timeStamp}`)
    // console.log(this.differ.diff({ input: this.input }))
  }
}
