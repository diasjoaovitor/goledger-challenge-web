import { ReactElement } from 'react'
import {
  Box,
  IconButton,
  Modal as MuiModal,
  Paper,
  Typography
} from '@mui/material'
import { Close } from '@mui/icons-material'
import * as S from './style'

export type TModalProps = {
  open: boolean
  title: string
  handleClose(): void
}

export const Modal = ({
  open,
  title,
  children,
  handleClose
}: TModalProps & { children: ReactElement }) => {
  return (
    <MuiModal sx={S.Wrapper} open={open} onClose={handleClose}>
      <Paper sx={S.Content}>
        <Box sx={S.Header}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        {children}
      </Paper>
    </MuiModal>
  )
}
