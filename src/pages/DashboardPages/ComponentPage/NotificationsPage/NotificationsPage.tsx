import { RouteIdEnum } from '@/config/enums';
import { Navigate } from 'react-router-dom';

export const NotificationsPage = () => {
  return <Navigate to={RouteIdEnum.Alerts} />;
};

export default NotificationsPage;
