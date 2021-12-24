import { Component, Input } from '@angular/core'

import { SearchResult } from '../../../services/yt-search.service'

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html'
})
export class ResultCardComponent {
  @Input() result: SearchResult
}
