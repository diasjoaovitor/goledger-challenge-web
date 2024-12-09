import { useMutation } from '@tanstack/react-query'
import { useNotifications } from '@toolpad/core'
import { SongService } from '@/services'
import { TSongModel } from '@/models'
import { TSongRequestCreateBody } from '@/types'
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
  const songService = new SongService()

  const onSuccess = onSuccessHandler({
    refetch,
    notifications,
    handleFormClose
  })
  const onError = onErrorHandler({ notifications })

  const { isLoading: mutationCreateIsLoading, mutate: mutateCreate } =
    useMutation<TSongModel, unknown, TSongRequestCreateBody>({
      mutationKey: ['add-song'],
      mutationFn: songService.create,
      onSuccess,
      onError
    })

  return { mutationIsLoading: mutationCreateIsLoading, mutateCreate }
}
