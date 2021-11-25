# Angular notes

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
:host {}

// selects the component and its children's h2 (works for content projected with ng-content as well)
:host ::ng-deep h2 {}
:host /deep/ h2 {}

// activates if parent component/element has foo class (theming)
:host-context(.foo) {}
```

```html
<div [class.foo]="true"></div>
<div class="foo"></div>

<div [ngClass]="['foo', 'foo-bar']"></div>
<div [ngClass]="'foo foo-bar'"></div>
<div [ngClass]="{ foo: true, 'foo-bar': true }"></div>
<div [ngClass]="getStyles(param)"></div>
<div class="foo foo-bar"></div>

<!-- inline style takes precedence over class, except !important -->
<div [ngStyle]="{ 'color': 'red' }"></div>
<div [ngStyle]="getStyles()"></div>
<div style="color: red;"></div>
```
