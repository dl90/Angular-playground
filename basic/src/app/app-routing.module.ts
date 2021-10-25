import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"


const routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'animation',
        loadChildren: () => import('./modules/animation-example/animation-example.module').then(m => m.AnimationExampleModule)
      },
      {
        path: 'binding',
        loadChildren: () => import('./modules/binding-example/binding-example.module').then(m => m.BindingExampleModule)
      },
      {
        path: 'directives',
        loadChildren: () => import('./modules/directives-example/directives-example.module').then(m => m.DirectivesExampleModule)
      },
      {
        path: 'elements',
        loadChildren: () => import('./modules/elements-example/elements-example.module').then(m => m.ElementsExampleModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./modules/form-example/form-example.module').then(m => m.FormExampleModule)
      },
      {
        path: 'http',
        loadChildren: () => import('./modules/http-example/http-example.module').then(m => m.HttpExampleModule)
      },
      {
        path: 'lifecycle',
        loadChildren: () => import('./modules/lifecycle-example/lifecycle-example.module').then(m => m.LifecycleExampleModule)
      },
      {
        path: 'observables',
        loadChildren: () => import('./modules/observable-example/observable-example.module').then(m => m.ObservableExampleModule)
      },
      {
        path: 'pipe',
        loadChildren: () => import('./modules/pipe-example/pipe-example.module').then(m => m.PipeExampleModule)
      },
      {
        path: 'routing',
        loadChildren: () => import('./modules/routing-example/routing-example.module').then(m => m.RoutingExampleModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./modules/service-example/service-example.module').then(m => m.ServiceExampleModule)
      },
      {
        path: 'zone',
        loadChildren: () => import('./modules/zone-example/zone-example.module').then(m => m.ZoneExampleModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  // useHash: avoids server 404 due to only having index.html, path after # is ignored by server
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
