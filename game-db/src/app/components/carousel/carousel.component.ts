import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { trigger, transition, useAnimation } from '@angular/animations'

import { Screenshot } from 'src/app/models/game.interface'
import { fadeIn, fadeOut } from './carousel.animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(fadeIn, { params: { time: '500ms' } })
      ]),
      transition('* => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } })
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() screenshots!: Screenshot[]
  currentSlide = 0

  constructor() {}

  ngOnInit(): void {
    this.preloadImages()
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1
    this.currentSlide = previous < 0 ? this.screenshots.length - 1 : previous
  }

  onNextClick() {
    const next = this.currentSlide + 1
    this.currentSlide = next === this.screenshots.length ? 0 : next
  }

  private preloadImages() {
    for (const s of this.screenshots) new Image().src = s.image
  }
}
