import { SxProps, Theme } from '@mui/material'

export const Wrapper: SxProps<Theme> = {
  p: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw'
}

export const Content: SxProps<Theme> = {
  p: 3,
  flex: 1,
  maxWidth: 800,
  maxHeight: '90vh',
  overflow: 'auto'
}

export const Header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1,
  mb: 2
}
