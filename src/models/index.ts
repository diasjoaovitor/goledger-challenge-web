type TBase = {
  '@assetType': string
  '@key': string
  '@lastTouchBy': string
  '@lastTx': string
  '@lastUpdated': string
  name: string
}

export type TAlbumModel = {
  artist: {
    '@assetType': string
    '@key': string
  }
  year: number
} & TBase

export type TArtistModel = {
  country: string
} & TBase

export type TSongModel = {
  album: {
    '@assetType': string
    '@key': string
  }
} & TBase
