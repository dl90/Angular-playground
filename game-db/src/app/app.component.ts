import { Component } from '@angular/core'
import {
  animate,
  style,
  query,
  transition,
  trigger,
  stagger
} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('500ms', [animate('1s ease-in', style({ opacity: 1 }))]),
          { optional: true }
        ),
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(
          ':leave',
          stagger('500ms', [animate('1s ease-out', style({ opacity: 0 }))]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {}
