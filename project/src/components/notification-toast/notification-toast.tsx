import { toast } from 'react-toastify';
import { Notification } from '../../types/notifications';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearNotification, getNotifications } from '../../store/notifications';

function NotificationToast(): JSX.Element {
  const notifications = useAppSelector(getNotifications);
  const dispatch = useAppDispatch();

  function renderNotifications() {
    notifications.forEach((notification: Notification) => {
      const toastOptions = {
        autoClose: notification.duration || 4000,
        onClose: () => dispatch(clearNotification(notification.id)),
      };

      if (toast.isActive(notification.id)) {
        return;
      }

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastOptions);
          break;
        case 'success':
          toast.success(notification.message, toastOptions);
          break;
        case 'info':
          toast.info(notification.message, toastOptions);
          break;
        case 'warning':
          toast.warning(notification.message, toastOptions);
          break;
        default:
          return null;
      }
    });
  }

  return <>{renderNotifications()}</>;
}

export default NotificationToast;
