import { RouteIdEnum } from '@/config/enums';
import { Navigate } from 'react-router-dom';

export function FormsPage() {
  return <Navigate to={RouteIdEnum.TextInputs} />;
}

export default FormsPage;
