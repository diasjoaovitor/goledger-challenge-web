import { TFieldOption, TFieldProps } from '@/components'
import { TListItem } from './List'

export const getFormFields = (
  options: TFieldOption[],
  song: TListItem | undefined
): TFieldProps[] => [
  {
    name: 'name',
    label: 'Nome da música',
    defaultValue: song?.name,
    disabled: !!song
  },
  {
    name: 'album',
    label: 'Álbum da música',
    element: 'autocomplete',
    options,
    value: song?.album?.name,
    disabled: !!song
  }
]
