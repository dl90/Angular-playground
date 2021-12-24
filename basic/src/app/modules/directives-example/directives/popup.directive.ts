import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appPopup]',
  exportAs: 'appPopup' // makes directive assignable to template variables (accessible from elsewhere in the template)
})
export class PopupDirective {
  @Input() msg: string

  @HostListener('click') onClick(): void {
    alert(this.msg)
  }

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
  }
}
