import { Navigation } from '@toolpad/core'
import { Album, LibraryMusic, MusicNote, QueueMusic } from '@mui/icons-material'

export const NAVIGATION: Navigation = [
  {
    title: 'Músicas',
    icon: <LibraryMusic />
  },
  {
    title: 'Artistas',
    segment: 'artists',
    icon: <MusicNote />
  },
  {
    title: 'Álbuns',
    segment: 'albums',
    icon: <Album />
  },
  {
    title: 'Playlists',
    segment: 'playlists',
    icon: <QueueMusic />
  }
]
