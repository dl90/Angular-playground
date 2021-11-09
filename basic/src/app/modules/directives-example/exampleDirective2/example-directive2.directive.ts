import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core'


@Directive({
  selector: '[appExampleDirective2]'
})
export class ExampleDirective2 implements OnInit {

  ele: HTMLElement
  @Input() defaultColor = 'transparent'

  // setting alias same as directive => single input directive, eg [ngStyles]="{}"
  @Input('appExampleDirective2') highlightColor = 'lavender'

  // bind to any property of element with this directive
  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.ele = this.elementRef.nativeElement
    this.backgroundColor = this.defaultColor

    // this.renderer.listen(this.ele, 'mouseover', () => {
    //   this.renderer.setStyle(ele, 'background-color', 'lavender')
    // })

    // this.renderer.listen(this.ele, 'mouseout', () => {
    //   this.renderer.setStyle(ele, 'background-color', '')
    // })
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.dir(this.ele)
    // this.renderer.setStyle(this.ele, 'background-color', 'lavender')

    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseout') mouseout(eventData: Event) {
    // this.renderer.setStyle(this.ele, 'background-color', '')

    this.backgroundColor = this.defaultColor
  }

}
