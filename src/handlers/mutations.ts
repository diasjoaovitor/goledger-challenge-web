import { useNotifications } from '@toolpad/core'
import { genericMessage } from '@/notification'

export const onSuccessHandler = ({
  refetch,
  notifications,
  handleFormClose
}: {
  refetch: () => void
  notifications: ReturnType<typeof useNotifications>
  handleFormClose: () => void
}) => {
  return () => {
    refetch()
    notifications.show(genericMessage.success.mutation, {
      severity: 'success',
      autoHideDuration: 3000
    })
    handleFormClose()
  }
}

export const onErrorHandler = ({
  notifications
}: {
  notifications: ReturnType<typeof useNotifications>
}) => {
  return (error: unknown) => {
    console.error(error)
    notifications.show(genericMessage.error.mutation, {
      severity: 'error',
      autoHideDuration: 3000
    })
  }
}
