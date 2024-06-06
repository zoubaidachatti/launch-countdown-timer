import { RouterPaths } from '@/config/constants';
import { RouteIdEnum } from '@/config/enums';
import { LandingLayout } from '@/layouts';
import { Navigate, RouteObject } from 'react-router-dom';
import { LandingPage } from './routes.constants';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: (
      <LandingLayout>
        <LandingPage />
      </LandingLayout>
    ),
  },
  {
    path: RouteIdEnum.Any,
    element: <Navigate to={RouterPaths.RootPaths.rootPath} />,
  },
];
