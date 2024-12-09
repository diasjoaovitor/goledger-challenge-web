import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationsProvider } from '@toolpad/core/useNotifications'
import { Layout } from './components'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <Layout />
      </NotificationsProvider>
    </QueryClientProvider>
  )
}

export default App
