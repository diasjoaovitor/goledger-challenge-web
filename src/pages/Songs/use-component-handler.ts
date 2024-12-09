import { FormEvent, useState } from 'react'
import { TSongCreateSchema } from './schema'
import { getAlbumKey } from './utils'
import { useNotifications } from '@toolpad/core'
import { TListItem } from './List'
import { useDataFetch } from './use-data-fetch'
import { useDataMutation } from './use-data-mutation'

export const useComponentHandler = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [song, setSong] = useState<TListItem | undefined>()
  const [search, setSearch] = useState()

  const notifications = useNotifications()

  const {
    songsData,
    albumData,
    fetchIsLoading,
    songIsLoading,
    songData,
    songsRefetch,
    songRefetch
  } = useDataFetch({
    notifications,
    search
  })
  const albums = albumData?.result || []
  const songs = !search ? songsData?.result || [] : songData ? [songData] : []

  const handleFormOpen = (song?: TListItem) => {
    setFormIsOpen(true)
    setSong(song)
  }

  const handleFormClose = () => {
    setFormIsOpen(false)
    setSong(undefined)
  }

  const { mutateCreate, mutationIsLoading } = useDataMutation({
    notifications,
    handleFormClose,
    refetch: songsRefetch
  })

  const isLoading = fetchIsLoading || mutationIsLoading

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget.search.value)
    setSearch(e.currentTarget.search.value)
    songRefetch()
  }

  const handleFormSubmit = ({ album, name }: TSongCreateSchema) => {
    const albumKey = getAlbumKey(album, albums)
    if (!albumKey) return
    mutateCreate({ albumKey, name })
  }

  return {
    albums,
    songs,
    isLoading,
    songIsLoading,
    song,
    formIsOpen,
    handleFormOpen,
    handleFormClose,
    handleFormSubmit,
    handleSearchSubmit
  }
}
