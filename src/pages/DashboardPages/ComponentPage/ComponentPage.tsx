import { RouteIdEnum } from '@/config/enums';
import { Navigate } from 'react-router-dom';

export const ComponentPage = () => {
  return <Navigate to={RouteIdEnum.Base} />;
};

export default ComponentPage;
