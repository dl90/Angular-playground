import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { InputEventComponent } from './input-event.component'

describe('InputEventComponent', () => {
  let component: InputEventComponent
  let fixture: ComponentFixture<InputEventComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEventComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEventComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create with appropriate properties', () => {
    expect(component).toBeTruthy()
    expect(component.form).toBeTruthy()
  })

  describe('<input id=email>', () => {
    let emailInput: HTMLInputElement

    beforeEach(() => {
      emailInput = fixture.nativeElement.querySelector('#email')
      component.form.reset()
    })

    it('input event should update #form.value', () => {
      const stubEmail = 'test@test.co'

      emailInput.value = stubEmail
      emailInput.dispatchEvent(new Event('input'))

      expect(component.form.value.email).toBe(stubEmail)
      expect(component.form.get('email')).toBeDefined()
      expect(component.form.get('email')!.status).toBe('VALID')
      expect(component.form.get('email')!.value).toBe(stubEmail)
    })

    it('invalid email should update form status', () => {
      const invalidEmails = ['a', '@', '@test.co', 'test@test.']

      for (const email of invalidEmails) {
        emailInput.value = email
        emailInput.dispatchEvent(new Event('input'))

        expect(component.form.get('email')).toBeDefined()
        expect(component.form.get('email')!.status).toBe('INVALID')
        expect(component.form.get('email')!.value).toBe(email)
      }
    })
  })
})
