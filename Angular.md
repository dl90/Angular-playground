# Angular notes

[![wakatime](https://wakatime.com/badge/user/55f86a89-d313-4935-8ac0-111e44d633f2/project/9017df3e-5e50-4f41-a434-089efbe26be5.svg)](https://wakatime.com/badge/user/55f86a89-d313-4935-8ac0-111e44d633f2/project/9017df3e-5e50-4f41-a434-089efbe26be5)

- OnPush change detection strategy [talk](https://www.youtube.com/watch?v=ybNj-id0kjY)
  - limit component re-renders to input data and internal state changes
- ngFor trackBy
  - selective element re-rendering & caching [doc](https://angular.io/api/common/NgForOf)
- Detach change detection (NgZone)
  - CD should be < 16ms
  - injected ChangeDetectorRef detach, reattach, detectChanges
- Lazy loading vs preloading
- prefer streams and async pipes
  - auto subscribe and unsubscribe
  - calls markForCheck on change, updates with OnPush change detection
- rxjs shareReplay
- debouncing/throttling
- bundle size and import [vid](https://www.youtube.com/watch?v=-eH2gCGHcGs)
- resolve guards
- web workers
- injector token
- Angular universal

```bash
# generate lazy loaded module with route path and component name
ng g m --module app --route path name
```

## Styles

```scss
// selects the component
:host {
}

// selects the component and its children's h2 (works for content projected with ng-content as well)
:host ::ng-deep h2 {
}
:host /deep/ h2 {
}

// activates if parent component/element has foo class (theming)
:host-context(.foo) {
}
```

```html
<div [class.foo]="true"></div>
<div class="foo"></div>

<div [ngClass]="['foo', 'foo-bar']"></div>
<div [ngClass]="'foo foo-bar'"></div>
<div [ngClass]="{ foo: true, 'foo-bar': true }"></div>
<div [ngClass]="getStyles(param)"></div>
<div [ngClass]="classVar"></div>
<div class="foo foo-bar"></div>

<!-- inline style takes precedence over class, except !important -->
<div [ngStyle]="{ 'color': 'red' }"></div>
<div [style.color]="'red'"></div>
<div [style.font-size.em]="1"></div>
<div [ngStyle]="getStyles()"></div>
<div style="color: red;"></div>

<a (click)="onClick()"></a>
```

```ts
export class FooComponent {
  // binds property to host element, allows configuring host element within component
  @HostBinding('attr.class') hostClass = 'foo bar baz'

  onClick() {
    // stops click event from propagating to <a> (refresh)
    return false
  }
}
```
