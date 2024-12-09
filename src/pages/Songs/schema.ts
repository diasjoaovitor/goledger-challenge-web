import * as yup from 'yup'

export type TSongCreateSchema = {
  name: string
  album: string
}

export const schema = yup.object().shape({
  name: yup.string().required('Nome da música é obrigatório'),
  album: yup.string().required('Álbum da música é obrigatório')
})
