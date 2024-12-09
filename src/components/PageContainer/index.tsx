import { FormEvent, ReactNode } from 'react'
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { AddCircle, Search } from '@mui/icons-material'
import * as S from './style'

type TPageContainer = {
  children: ReactNode
  handleAddClick: () => void
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const PageContainer = ({
  children,
  handleAddClick,
  handleSearchSubmit
}: TPageContainer) => {
  return (
    <>
      <FormControl component="form" sx={S.Form} onSubmit={handleSearchSubmit}>
        <TextField
          type="search"
          name="search"
          label="Pesquisar"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }
          }}
          sx={{ flex: 1 }}
        />
        <IconButton
          color="primary"
          sx={{ svg: { width: '3rem', height: '3rem' } }}
          onClick={handleAddClick}
        >
          <AddCircle fontSize="large" />
        </IconButton>
      </FormControl>
      {children}
    </>
  )
}
