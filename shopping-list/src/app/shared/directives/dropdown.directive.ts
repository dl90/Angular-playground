import { Directive, ElementRef, HostListener, Input } from '@angular/core'

// @TODO buggy burger menu

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false

  @Input('appDropdown') menuRef: HTMLElement | undefined
  @HostListener('document:click', ['$event']) documentClick (event: Event) {
    if (!this.menuRef) return
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false

    this.menuRef.style.display = this.isOpen ? 'block' : 'none'
  }

  constructor (private elementRef: ElementRef) { }

}
