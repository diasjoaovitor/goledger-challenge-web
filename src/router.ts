import { createBrowserRouter } from 'react-router-dom'
import { Albums, Artists, Playlists, Songs } from './pages'
import App from './App'

export const router = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        {
          path: '/',
          Component: Songs
        },
        {
          path: '/artists',
          Component: Artists
        },
        {
          path: '/albums',
          Component: Albums
        },
        {
          path: '/playlists',
          Component: Playlists
        }
      ]
    }
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    }
  }
)
