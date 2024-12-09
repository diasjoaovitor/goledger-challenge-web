import { useEffect } from 'react'
import { AlbumService, SongService } from '@/services'
import { useQueries, useQuery } from '@tanstack/react-query'
import { useNotifications } from '@toolpad/core'
import { genericMessage } from '@/notification'

export const useDataFetch = ({
  notifications,
  search
}: {
  notifications: ReturnType<typeof useNotifications>
  search: string | undefined
}) => {
  const songService = new SongService()
  const albumService = new AlbumService()

  const [
    {
      data: songsData,
      error: songsError,
      isFetching: songsIsLoading,
      refetch: songsRefetch
    },
    { data: albumData, error: albumError, isFetching: albumIsLoading }
  ] = useQueries({
    queries: [
      {
        queryKey: ['songs'],
        queryFn: songService.findAll
      },
      {
        queryKey: ['albums'],
        queryFn: albumService.findAll
      }
    ]
  })

  const {
    data: songData,
    error: songError,
    isFetching: songIsLoading,
    refetch: songRefetch
  } = useQuery({
    queryKey: ['song', search],
    queryFn: async () => {
      if (!search) return
      return songService.findByName(search)
    },
    enabled: !!search
  })

  useEffect(() => {
    if (songsError || albumError || songError) {
      songsError && console.error(songsError)
      albumError && console.error(albumError)
      songError && console.error(songError)
      notifications.show(genericMessage.error.fetch, {
        severity: 'error',
        autoHideDuration: 3000
      })
    }
  }, [songsError, albumError, songError, notifications])

  const fetchIsLoading = songsIsLoading || albumIsLoading

  return {
    songsData,
    albumData,
    fetchIsLoading,
    songIsLoading,
    songData,
    songsRefetch,
    songRefetch
  }
}
