export type TAssetType = 'artist' | 'album' | 'song' | 'playlist'

export type TResponse<T> = {
  metadata: any
  result: T
}

export type TArtistCreateBody = {
  name: string
  country: string
}

export type TArtistUpdateBody = {
  '@key': string
  name: string
  country: string
}

export type TSongRequestCreateBody = {
  name: string
  albumKey: string
}
