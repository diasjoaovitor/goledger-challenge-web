import { TFieldProps } from '@/components'
import { TArtistModel } from '@/models'

export const getFormFields = (
  artist: TArtistModel | undefined
): TFieldProps[] => [
  {
    name: 'name',
    label: 'Nome do artista',
    defaultValue: artist?.name
  },
  {
    name: 'country',
    label: 'País do artista',
    defaultValue: artist?.country
  }
]
