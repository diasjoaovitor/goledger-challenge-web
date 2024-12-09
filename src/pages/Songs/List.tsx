import {
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { PlayCircle } from '@mui/icons-material'
import { TAlbumModel, TSongModel } from '@/models'

export type TListItem = Omit<TSongModel, 'album'> & {
  album: TAlbumModel | undefined
}

type TListProps = {
  listItems: TListItem[]
  handleClick: (song: TListItem) => void
}

export const List = ({ listItems, handleClick }: TListProps) => {
  return (
    <MuiList>
      {listItems.map((song) => (
        <ListItem
          key={song['@key']}
          divider
          sx={{ cursor: 'pointer' }}
          onClick={() => handleClick(song)}
        >
          <ListItemIcon>
            <PlayCircle fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary={song.name}
            secondary={`${song.album?.name} - ${song.album?.year}`}
          />
        </ListItem>
      ))}
    </MuiList>
  )
}
