import { Directive, ElementRef, OnInit } from '@angular/core'


@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirective implements OnInit {

  constructor (
    private elementRef: ElementRef
  ) { }

  ngOnInit () {
    const ele = this.elementRef.nativeElement

    ele.onmouseover = () => {
      ele.style.backgroundColor = 'lightblue'
      // console.dir(ele)
    }

    ele.onmouseout = () => ele.style.backgroundColor = ''
  }

}
