import { Typography } from '@mui/material'
import { Form, Loader, PageContainer } from '@/components'
import { List } from './List'
import { useComponentHandler } from './use-component-handler'
import { getListItems } from './utils'
import { getFormFields } from './form-fields'
import { schema } from './schema'

export const Songs = () => {
  const {
    albums,
    songs,
    isLoading,
    songIsLoading,
    song,
    formIsOpen,
    handleFormOpen,
    handleFormClose,
    handleFormSubmit,
    handleSearchSubmit
  } = useComponentHandler()

  if (isLoading) return <Loader />

  const listItems = getListItems({ albums, songs })
  const formFields = getFormFields(
    albums.map((album) => ({
      label: album.name,
      id: album['@key']
    })),
    song
  )

  return (
    <PageContainer
      handleAddClick={() => handleFormOpen()}
      handleSearchSubmit={handleSearchSubmit}
    >
      <>
        {listItems.length ? (
          <List
            listItems={listItems}
            handleClick={(song) => handleFormOpen(song)}
          />
        ) : !songIsLoading ? (
          <Typography component="p" mx={2}>
            Nenhuma música encontrada
          </Typography>
        ) : (
          <></>
        )}
        <Form
          fields={formFields}
          schema={schema}
          handleSubmit={handleFormSubmit}
          handleDelete={() => {}}
          modalProps={{
            open: formIsOpen,
            title: !song ? 'Adicionar Música' : 'Não é possível editar músicas',
            handleClose: handleFormClose
          }}
        />
        {songIsLoading && <Loader />}
      </>
    </PageContainer>
  )
}
