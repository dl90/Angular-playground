import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { ChildAComponent } from './child-a.component'

describe('ChildAComponent', () => {
  let component: ChildAComponent
  let fixture: ComponentFixture<ChildAComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildAComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeDefined()
    expect(component.isOn).toBe(false)
  })

  describe('#onToggle()', () => {
    it('should toggle #isOn', () => {
      expect(component.isOn).toBe(false)
      component.onToggle()
      expect(component.isOn).toBe(true)
      component.onToggle()
      expect(component.isOn).toBe(false)
    })

    it('should have correct label text (nativeElement)', () => {
      const element: HTMLElement = fixture.nativeElement
      const switchLabel = element.querySelector('#switch-label')!

      expect(switchLabel).toBeDefined()
      expect(switchLabel.textContent).toBe('OFF')
      component.onToggle()
      fixture.detectChanges()
      expect(switchLabel!.textContent).toBe('ON')
    })

    it('should have correct label text (debugElement)', () => {
      const switchLabelDebugElement = fixture.debugElement.query(By.css('#switch-label'))
      const switchLabel = switchLabelDebugElement.nativeElement

      expect(switchLabel).toBeDefined()
      expect(switchLabel.textContent).toBe('OFF')
      component.onToggle()
      fixture.detectChanges()
      expect(switchLabel.textContent).toBe('ON')
    })
  })
})
