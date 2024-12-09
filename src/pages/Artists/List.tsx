import {
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { MusicNote } from '@mui/icons-material'
import { TArtistModel } from '@/models'

type TListProps = {
  listItems: TArtistModel[]
  handleClick: (artist: TArtistModel) => void
}

export const List = ({ listItems, handleClick }: TListProps) => {
  return (
    <MuiList>
      {listItems.map((artist) => (
        <ListItem
          key={artist['@key']}
          divider
          sx={{ cursor: 'pointer' }}
          onClick={() => handleClick(artist)}
        >
          <ListItemIcon>
            <MusicNote fontSize="large" />
          </ListItemIcon>
          <ListItemText primary={artist.name} secondary={artist.country} />
        </ListItem>
      ))}
    </MuiList>
  )
}
