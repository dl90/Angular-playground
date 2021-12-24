import { YTSearchService } from './yt-search.service'

const YOUTUBE_API_KEY: string = 'your api key'
const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search'

export const youtubeSearchInjectable: Array<any> = [
  { provide: YTSearchService, useClass: YTSearchService },
  { provide: 'YOUTUBE_API_KEY', useValue: YOUTUBE_API_KEY },
  { provide: 'YOUTUBE_API_URL', useValue: YOUTUBE_API_URL }
]
