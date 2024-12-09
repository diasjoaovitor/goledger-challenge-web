import { useEffect, useMemo } from 'react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Autocomplete,
  Button,
  FormControl,
  TextField,
  TextFieldProps
} from '@mui/material'
import { Modal, TModalProps } from '../Modal'

export type TFieldOption = {
  label: string
  id: string
}

export type TFieldProps = TextFieldProps & {
  name: string
  element?: 'textfield' | 'autocomplete'
  options?: TFieldOption[]
}

type TFormProps = {
  fields: TFieldProps[]
  schema: yup.ObjectSchema<any>
  handleSubmit: SubmitHandler<any>
  handleDelete(): void
  modalProps: TModalProps
}

export const Form = ({
  fields,
  schema,
  handleSubmit,
  handleDelete,
  modalProps
}: TFormProps) => {
  const defaultValues = useMemo(
    () =>
      fields
        .map((props) => ({ [props.name]: props.defaultValue }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    [fields]
  )

  const form = useForm({
    resolver: yupResolver(schema)
  })

  const { reset } = form

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <Modal {...modalProps}>
      <FormControl
        component="form"
        onSubmit={form.handleSubmit(handleSubmit)}
        fullWidth
      >
        {fields.map((props, index) => {
          const { name, element, options, ...rest } = props
          const error = form.formState.errors[name]
          const key = props.id || index
          return element !== 'autocomplete' ? (
            <TextField
              key={key}
              {...rest}
              {...form.register(name)}
              error={!!error}
              helperText={error?.message as string | undefined}
              margin="dense"
            />
          ) : (
            <Autocomplete
              key={props.id || index}
              value={props.value}
              options={options?.map(({ label }) => label) || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...rest}
                  {...form.register(name)}
                  margin="dense"
                />
              )}
            />
          )
        })}
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Salvar
        </Button>
        <Button variant="text" color="error" onClick={handleDelete}>
          Excluir
        </Button>
      </FormControl>
    </Modal>
  )
}
