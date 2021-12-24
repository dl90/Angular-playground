import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export class SearchResult {
  id: string
  channel: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null
    this.channel = (obj && obj.channel) || null
    this.title = (obj && obj.title) || null
    this.description = (obj && obj.description) || null
    this.thumbnailUrl = (obj && obj.thumbnailUrl) || null
    this.videoUrl = (obj && obj.videoUrl) || `https://www.youtube.com/watch?v=${this.id}`
  }
}

@Injectable()
export class YTSearchService {
  constructor(
    private http: HttpClient,
    @Inject('YOUTUBE_API_KEY') private apiKey: string,
    @Inject('YOUTUBE_API_URL') private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=20`
    ].join('&')
    const queryUrl = `${this.apiUrl}?${params}`

    return this.http.get(queryUrl).pipe(
      map(
        (response) => <any>response['items'].map((item: any) => {
            // console.log(item)
            return new SearchResult({
              id: item.id.videoId,
              channel: item.snippet.channelTitle,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url
            })
          })
      )
    )
  }
}
