import { RouteIdEnum } from '@/config/enums';
import { LandingLayout } from '@/layouts';
import { RouteObject } from 'react-router-dom';
import { LandingPage, NotFoundPage } from './routes.constants';

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
    element: <NotFoundPage />,
  },
  {
    path: RouteIdEnum.NotFound,
    element: <NotFoundPage />,
  },
];
