import { Typography } from '@mui/material'
import { Form, Loader, PageContainer } from '@/components'
import { useComponentHandler } from './use-component-handler'
import { List } from './List'
import { getFormFields } from './form-fields'
import { schema } from './schema'

export const Artists = () => {
  const {
    artists,
    artist,
    isLoading,
    artistIsLoading,
    formIsOpen,
    handleFormOpen,
    handleFormClose,
    handleFormSubmit,
    handleSearchSubmit,
    handleDelete
  } = useComponentHandler()

  if (isLoading) return <Loader />

  const formFields = getFormFields(artist)

  return (
    <PageContainer
      handleAddClick={() => handleFormOpen()}
      handleSearchSubmit={handleSearchSubmit}
    >
      <>
        {artists.length ? (
          <List
            listItems={artists}
            handleClick={(artist) => handleFormOpen(artist)}
          />
        ) : !artistIsLoading ? (
          <Typography component="p" mx={2}>
            Nenhum artista encontrada
          </Typography>
        ) : (
          <></>
        )}
        <Form
          fields={formFields}
          schema={schema}
          handleSubmit={handleFormSubmit}
          handleDelete={handleDelete}
          modalProps={{
            open: formIsOpen,
            title: !artist ? 'Adicionar Artista' : 'Editar Artista',
            handleClose: handleFormClose
          }}
        />
        {artistIsLoading && <Loader />}
      </>
    </PageContainer>
  )
}
