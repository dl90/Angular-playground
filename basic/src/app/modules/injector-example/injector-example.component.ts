import { Component, Inject, Injector, ReflectiveInjector } from '@angular/core'

import { DummyService } from './services/dummy.service'
import { InjectFactoryService } from './services/inject-factory.service'

@Component({
  selector: 'app-injector-example',
  templateUrl: './injector-example.component.html'
})
export class InjectorExampleComponent {
  userName: string
  private service: DummyService

  constructor(
    @Inject('SECRET_MSG') private secretMsg: string,
    private iFactory: InjectFactoryService
  ) {
    // manual injection
    const injector: any = ReflectiveInjector.resolveAndCreate([DummyService])
    this.service = injector.get(DummyService)
  }

  onClick(): void {
    this.service.setUser({ name: 'Testy Test' })
    this.userName = this.service.getUser().name

    console.log(this.secretMsg)
    this.iFactory.record({ event: 'Foo', scope: 'Bar' })
  }
}
