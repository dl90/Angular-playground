import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { delay, of } from 'rxjs'
import { By } from '@angular/platform-browser'

import { ParentComponent } from './parent.component'
import { HttpService } from 'src/app/services/http.service'
import { ChildAComponent } from '../child-a/child-a.component'
import { ChildBComponent } from '../child-b/child-b.component'
import { InputEventComponent } from '../input-event/input-event.component'

describe('ParentComponent', () => {
  let component: ParentComponent
  let fixture: ComponentFixture<ParentComponent>

  const stubMessage = 'test message'
  const stubValue = [
    { userId: 1, id: 1, title: 'test 1', body: 'test 1' },
    { userId: 2, id: 2, title: 'test 2', body: 'test 2' }
  ]

  const mockHttpService: Partial<HttpService> = {
    getPosts: () => of(stubValue),
    delayedMessage: (ms: number) => of(stubMessage).pipe(delay(ms))
  }

  const delayMs = 1000
  const HttpServiceSpy = jasmine.createSpyObj('HttpService', ['getPosts', 'delayedMessage'])
  const getPostsSpy = HttpServiceSpy.getPosts.and.returnValue(of(stubValue)) // sync
  const delayedMessageSpy = HttpServiceSpy.delayedMessage.and.returnValue(
    of(stubMessage).pipe(delay(delayMs)) // async
  )

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildAComponent, ChildBComponent, InputEventComponent],
      imports: [ReactiveFormsModule],
      // providers: [{ provide: HttpService, useValue: mockHttpService }]
      providers: [{ provide: HttpService, useValue: HttpServiceSpy }]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent)
    component = fixture.componentInstance
  })

  it('should create', async () => {
    expect(component).toBeTruthy()
    expect(component.posts).toBeUndefined()
    expect(component.delayedMessage$).toBeUndefined()
  })

  it('should load sync stub values from spy.getPost()', () => {
    fixture.detectChanges()
    expect(getPostsSpy.calls.any()).toBe(true)
    expect(component.posts).toEqual(stubValue)
  })

  // fakeAsync
  it('should load async stub values from spy.delayedMessage()', fakeAsync(() => {
    const stubLoadingMessage = 'test loading'
    const delayedMessageElement = fixture.debugElement.query(
      By.css('#delayed-message')
    ).nativeElement
    component.loadingMessage = stubLoadingMessage

    fixture.detectChanges()
    expect(delayedMessageSpy.calls.any()).toBe(true)
    expect(component.delayedMessage$).toBeDefined()
    expect(delayedMessageElement.textContent).toBe(stubLoadingMessage)

    tick(delayMs)
    fixture.detectChanges()
    expect(delayedMessageElement.textContent).toBe(stubMessage)

    flushMicrotasks()
  }))

  it('should render <app-child-b> with stub values', () => {
    fixture.detectChanges()
    const childBs = fixture.debugElement.queryAll(By.css('app-child-b'))

    expect(childBs.length).toBe(stubValue.length)
    for (let i = 0; i < stubValue.length; i++) {
      expect(childBs[i].nativeElement.textContent).toContain(stubValue[i].title)
    }
  })
})
