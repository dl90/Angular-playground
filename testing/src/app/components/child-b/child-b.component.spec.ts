import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { first } from 'rxjs'

import { ChildBComponent } from './child-b.component'

const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 }
}
const clickHelper = (el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left) => {
  if (el instanceof HTMLElement) {
    el.click()
  } else {
    el.triggerEventHandler('click', eventObj)
  }
}

describe('ChildBComponent', () => {
  let component: ChildBComponent
  let fixture: ComponentFixture<ChildBComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildBComponent]
      // providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    })
    fixture = TestBed.createComponent(ChildBComponent)
    component = fixture.componentInstance
  })

  it('should create with appropriate properties', () => {
    expect(component).toBeTruthy()
    expect(component.selected).toBeTruthy()
  })

  it('should display stub data', () => {
    const stubData = { userId: 1, id: 1, title: 'test', body: 'test' }
    component.post = stubData

    fixture.detectChanges()
    const postElement = fixture.debugElement.query(By.css('.post')).nativeElement

    expect(postElement).toBeTruthy()
    expect(postElement.textContent).toContain(stubData.id)
    expect(postElement.textContent).toContain(stubData.title)
    expect(postElement.textContent).toContain(stubData.body)
  })

  it('#click() should emit stub post id', () => {
    const stubPost = { userId: 1, id: 1, title: 'test', body: 'test' }
    const debugElement = fixture.debugElement.query(By.css('.post'))
    let selectedId: number | undefined

    component.post = stubPost
    component.selected.pipe(first()).subscribe((emittedId) => (selectedId = emittedId))

    clickHelper(debugElement)
    expect(selectedId).toBe(stubPost.id)
  })
})
