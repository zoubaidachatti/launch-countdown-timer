import { lazy } from 'react';

const LandingPage = lazy(() => import('@/pages/OtherPages/LandingPage/LandingPage'));

const NotFoundPage = lazy(() => import('@/pages/OtherPages/NotFoundPage/NotFoundPage'));

export { LandingPage, NotFoundPage };
