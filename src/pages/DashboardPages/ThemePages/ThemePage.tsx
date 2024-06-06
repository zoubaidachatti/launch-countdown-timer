import { RouteIdEnum } from '@/config/enums';
import { Navigate } from 'react-router-dom';

export const ThemePage = () => {
  return <Navigate to={RouteIdEnum.Colors} />;
};

export default ThemePage;
