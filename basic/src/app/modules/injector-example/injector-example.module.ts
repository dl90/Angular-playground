import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { InjectorExampleComponent } from './injector-example.component'
import { ModuleService } from './services/module.service'
import { IImplement, InjectFactoryService, Metric } from './services/inject-factory.service'

const implementationA: IImplement = {
  recordEvent: (metric: Metric) => console.log(metric)
}
class ImplementationB implements IImplement {
  constructor(private secretMsg: string) {}

  recordEvent(metric: Metric) {
    console.log(metric, this.secretMsg)
  }
}

const routes: Routes = [{ path: '', component: InjectorExampleComponent }]

@NgModule({
  declarations: [InjectorExampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  /*
    providers: [ModuleService] shorthand for { provide: ModuleService, useClass: ModuleService }
    provide: token to identify the service (key) which can differ from class name

    # Resolution modifier

    @Optional: null if not found
    constructor(@Optional() private nullableService) {}

    @Self: resolves only if the service is provided locally (component level)
    @Component({ providers: [ComponentLevelService] })
    constructor(@Self() private componentLevelService: ComponentLevelService) {}

    @SkipSelf: opposite of @Self, resolves on parent provided services

    @Host: resolves only to local and host (parent component) provided services and
  */
  providers: [
    { provide: ModuleService, useClass: ModuleService },
    { provide: 'SECRET_MSG', useValue: 'This is a secret message' },
    {
      provide: InjectFactoryService,
      deps: ['SECRET_MSG'], // tokens specifying useFactory arguments
      useFactory: (secretMsg: string) => {
        const implementation = new ImplementationB(secretMsg)
        return new InjectFactoryService(implementation)
      }
    }
  ]
})
export class InjectorExampleModule {}
