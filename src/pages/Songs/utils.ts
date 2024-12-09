import { TAlbumModel, TSongModel } from '@/models'
import { TListItem } from './List'

export const getListItems = ({
  songs,
  albums
}: {
  songs: TSongModel[]
  albums: TAlbumModel[]
}): TListItem[] => {
  if (!songs.length || !albums.length) return []
  const items = songs.map((song) => {
    const album = albums.find((album) => album['@key'] === song.album['@key'])
    return {
      ...song,
      album
    }
  })
  return items
}

export const getAlbumKey = (name: string, albums: TAlbumModel[]) => {
  const album = albums.find((album) => album.name === name)
  return album?.['@key']
}
