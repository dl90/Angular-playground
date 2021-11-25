import { style, animate, animation } from '@angular/animations'

export const fadeIn = animation(
  [style({ opacity: 0 }), animate('{{ time }}', style({ opacity: 1 }))],
  { params: { time: '300ms' } }
)

export const fadeOut = animation(
  [animate('{{ time }}', style({ opacity: 0 }))],
  { params: { time: '300ms' } }
)
