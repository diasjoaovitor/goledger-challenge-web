import { useMutation } from '@tanstack/react-query'
import { useNotifications } from '@toolpad/core'
import { ArtistService } from '@/services'
import { TArtistModel } from '@/models'
import { TArtistCreateBody, TArtistUpdateBody } from '@/types'
import { onErrorHandler, onSuccessHandler } from '@/handlers'

export const useDataMutation = ({
  notifications,
  handleFormClose,
  refetch
}: {
  notifications: ReturnType<typeof useNotifications>
  handleFormClose: () => void
  refetch: () => void
}) => {
  const artistService = new ArtistService()

  const onSuccess = onSuccessHandler({
    refetch,
    notifications,
    handleFormClose
  })
  const onError = onErrorHandler({ notifications })

  const { isLoading: mutationCreateIsLoading, mutate: mutateCreate } =
    useMutation<TArtistModel, unknown, TArtistCreateBody>({
      mutationKey: ['add-artist'],
      mutationFn: artistService.create,
      onSuccess,
      onError
    })

  const { isLoading: mutationUpdateIsLoading, mutate: mutateUpdate } =
    useMutation<TArtistModel, unknown, TArtistUpdateBody>({
      mutationKey: ['update-artist'],
      mutationFn: artistService.update,
      onSuccess,
      onError
    })

  const { isLoading: mutationDeleteIsLoading, mutate: mutateDelete } =
    useMutation<TArtistModel, unknown, string>({
      mutationKey: ['delete-artist'],
      mutationFn: artistService.delete,
      onSuccess,
      onError
    })

  const mutationIsLoading =
    mutationCreateIsLoading ||
    mutationUpdateIsLoading ||
    mutationDeleteIsLoading

  return { mutationIsLoading, mutateCreate, mutateUpdate, mutateDelete }
}
