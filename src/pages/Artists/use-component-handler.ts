import { FormEvent, useState } from 'react'
import { useNotifications } from '@toolpad/core'
import { TArtistCreateSchema } from './schema'
import { useDataFetch } from './use-data-fetch'
import { useDataMutation } from './use-data-mutation'
import { useParams } from 'react-router-dom'
import { TArtistModel } from '@/models'

export const useComponentHandler = () => {
  const params = useParams<{ search: string }>()

  const [formIsOpen, setFormIsOpen] = useState(false)
  const [artist, setArtist] = useState<TArtistModel | undefined>()
  const [search, setSearch] = useState(params.search)

  const notifications = useNotifications()

  const {
    artistsData,
    artistData,
    artistsIsLoading,
    artistIsLoading,
    artistRefetch,
    artistsRefetch
  } = useDataFetch({
    notifications,
    search
  })
  const artists = !search
    ? artistsData?.result || []
    : artistData
      ? [artistData]
      : []

  const handleFormOpen = (artist?: TArtistModel) => {
    setFormIsOpen(true)
    setArtist(artist)
  }

  const handleFormClose = () => {
    setFormIsOpen(false)
    setArtist(undefined)
  }

  const { mutateCreate, mutateUpdate, mutateDelete, mutationIsLoading } =
    useDataMutation({
      notifications,
      handleFormClose,
      refetch: artistsRefetch
    })

  const isLoading = artistsIsLoading || mutationIsLoading

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget.search.value)
    setSearch(e.currentTarget.search.value)
    artistRefetch()
  }

  const handleFormSubmit = ({ country, name }: TArtistCreateSchema) => {
    !artist
      ? mutateCreate({ country, name })
      : mutateUpdate({
          ...artist,
          name,
          country
        })
  }

  const handleDelete = () => {
    if (!artist) return
    mutateDelete(artist['@key'])
  }

  return {
    artists,
    artist,
    isLoading,
    artistIsLoading,
    formIsOpen,
    handleFormOpen,
    handleFormClose,
    handleFormSubmit,
    handleSearchSubmit,
    handleDelete
  }
}
