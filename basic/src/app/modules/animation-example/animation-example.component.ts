import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations'
import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  animations: [
    trigger('divAnimate', [
      state('normal', style({
        'background-color': 'lavender',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'lightblue',
        'transform': 'translateX(100px)'
      })),
      transition('void => *', animate(0)),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(600))
    ]),

    trigger('divAnimateShrink', [
      state('normal', style({
        'background-color': 'lavender',
        'transform': 'scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'lightblue',
        'transform': 'scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => *', [
        animate(500, style({
          'background-color': 'yellow',
          'transform': 'scale(1.2)'
        })),
        animate(300)
      ])
    ]),

    trigger('list', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(100px)'
      })),
      transition('void => *', [
        style({
          'opacity': '0',
          'transform': 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
          'opacity': '0',
          'transform': 'translateX(100px)'
        }))
      ])
    ]),

    trigger('list1', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(100px)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            'opacity': 0,
            'transform': 'translateX(-100px)',
            'offset': 0
          }),
          style({
            'opacity': 0.5,
            'transform': 'translateX(-10px)',
            'offset': 0.3
          }),
          style({
            'opacity': 1,
            'transform': 'translateX(-5px)',
            'offset': 0.5
          }),
          style({
            'opacity': 1,
            'transform': 'translateX(0px)',
            'offset': 1
          })
        ]))
      ]),
      transition('* => void', group([
        animate(500, style({
          'color': 'red',
          'text-decoration': 'line-through'
        })),
        animate(700, style({
          'opacity': '0',
          'transform': 'translateX(100px)'
        }))
      ]))
    ]),
  ]
})
export class AnimationExampleComponent implements OnInit {

  list = ['Milk', 'Sugar', 'Bread']
  divAnimationState = 'normal'

  constructor () { }

  ngOnInit (): void { }

  onAnimate () {
    this.divAnimationState = this.divAnimationState === 'normal' ? 'highlighted' : 'normal'
  }

  onAdd (item: string) {
    this.list.push(item)
  }

  onDelete (item: string) {
    this.list = this.list.filter(i => i !== item)
  }

  onAnimationDone (event) {
    console.log(event)
  }

}
