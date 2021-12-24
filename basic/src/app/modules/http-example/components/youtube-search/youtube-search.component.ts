import { Component } from '@angular/core'

import { SearchResult } from '../../services/yt-search.service'

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html'
})
export class YoutubeSearchComponent {
  results: SearchResult[]
  loading: boolean

  onResults(results: SearchResult[]): void {
    // console.log('Results', results)
    this.results = results
  }
}
