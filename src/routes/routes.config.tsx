import { RouterPaths } from '@/config/constants';
import { RouteIdEnum } from '@/config/enums';
import { Navigate, RouteObject } from 'react-router-dom';
import { CountDownPage } from './routes.constants';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: <CountDownPage />,
  },
  {
    path: RouteIdEnum.Any,
    element: <Navigate to={RouterPaths.RootPaths.rootPath} />,
  },
];
