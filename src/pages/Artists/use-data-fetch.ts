import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNotifications } from '@toolpad/core'
import { ArtistService } from '@/services'
import { genericMessage } from '@/notification'

export const useDataFetch = ({
  notifications,
  search
}: {
  notifications: ReturnType<typeof useNotifications>
  search: string | undefined
}) => {
  const artistService = new ArtistService()

  const {
    data: artistsData,
    error: artistsError,
    isFetching: artistsIsLoading,
    refetch: artistsRefetch
  } = useQuery({
    queryKey: ['artists'],
    queryFn: artistService.findAll
  })

  const {
    data: artistData,
    error: artistError,
    isFetching: artistIsLoading,
    refetch: artistRefetch
  } = useQuery({
    queryKey: ['artist', search],
    queryFn: async () => {
      if (!search) return
      return artistService.findByName(search)
    },
    enabled: !!search
  })

  useEffect(() => {
    if (artistsError || artistError) {
      artistsError && console.error(artistsError)
      artistError && console.error(artistError)
      notifications.show(genericMessage.error.fetch, {
        severity: 'error',
        autoHideDuration: 3000
      })
    }
  }, [artistsError, artistError, notifications])

  return {
    artistsData,
    artistData,
    artistsIsLoading,
    artistIsLoading,
    artistRefetch,
    artistsRefetch
  }
}
