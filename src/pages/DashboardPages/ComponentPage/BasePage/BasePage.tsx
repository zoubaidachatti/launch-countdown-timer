import { RouteIdEnum } from '@/config/enums';
import { Navigate } from 'react-router-dom';

export const BasePage = () => {
  return <Navigate to={RouteIdEnum.Cards} />;
};

export default BasePage;
