import { AppProvider } from '@toolpad/core/react-router-dom'
import { NAVIGATION } from './Navigation'
import { DashboardLayout } from '@toolpad/core'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: 'Goledger'
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  )
}
