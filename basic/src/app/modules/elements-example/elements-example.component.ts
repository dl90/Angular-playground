import { Component, Injector, OnInit } from '@angular/core'
import { createCustomElement } from '@angular/elements'
import { DomSanitizer } from '@angular/platform-browser'

import { CompComponent } from './comp/comp.component'


@Component({
  selector: 'app-elements-example',
  templateUrl: './elements-example.component.html'
})
export class ElementsExampleComponent implements OnInit {

  content = null

  constructor (
    private injector: Injector,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit (): void {

    const compElement = createCustomElement(CompComponent, { injector: this.injector })
    customElements.define('comp-element', compElement)

    setTimeout(() => {
      // this.content = '<h5>Hello World</h5>'
      this.content = this.domSanitizer.bypassSecurityTrustHtml('<comp-element message="hello"></comp-element>')
    }, 1000)
  }

}
