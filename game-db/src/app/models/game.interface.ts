export interface Game {
  id: number
  background_image: string
  name: string
  released: string
  ratings: any[]
  metacritic: number
  metacritic_url?: string
  description: string
  description_raw: string
  website?: string
  platforms?: Platform[]
  publishers?: any[]
  genres?: any[]
  screenshots?: Screenshot[]
  trailers?: any[]
}

export interface Platform {
  platform: {
    id: number
    name: string
    slug: string
  }
}

export interface Screenshot {
  id: number
  image: string
  width: number
  height: number
  is_deleted: boolean
}
