import * as yup from 'yup'

export type TArtistCreateSchema = {
  name: string
  country: string
}

export const schema = yup.object().shape({
  name: yup.string().required('Nome do artista é obrigatório'),
  country: yup.string().required('País do artista é obrigatório')
})
