import { RouteIdEnum } from '@/config/enums';
import { DashboardLayout, LandingLayout, PagesLayout } from '@/layouts';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import {
  AlertsPage,
  BadgePage,
  BasePage,
  BreadcrumbsPage,
  ButtonsPage,
  CardsPage,
  CarouselPage,
  ChartsPage,
  CheckAndRadioPage,
  ColorPickerPage,
  ColorsPage,
  ComponentPage,
  FileInputPage,
  ForgetPasswordPage,
  FormsPage,
  HomePage,
  LandingPage,
  LoginPage,
  ModalsPage,
  NotFoundPage,
  NotificationsPage,
  PaginationPage,
  ProfilePage,
  ProgressPage,
  RangePage,
  RegisterPage,
  ResetPasswordPage,
  SelectPage,
  ServerErrorPage,
  SpinnersPage,
  SteppersPage,
  TablePage,
  TabsPage,
  TextInputsPage,
  ThemePage,
  ToastPage,
  TooltipsPage,
  TypographiesPage,
} from './routes.constants';

export const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    element: (
      <LandingLayout>
        <LandingPage />
      </LandingLayout>
    ),
  },
  { path: RouteIdEnum.Register, element: <RegisterPage /> },
  {
    path: RouteIdEnum.Auth,
    element: <Outlet />,
    children: [
      {
        path: RouteIdEnum.Root,
        element: <Navigate to={RouteIdEnum.Login} />,
      },
      {
        path: RouteIdEnum.Login,
        element: <LoginPage />,
      },
      {
        path: RouteIdEnum.ForgetPassword,
        element: <ForgetPasswordPage />,
      },
      {
        path: RouteIdEnum.ResetPassword,
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: RouteIdEnum.Dashboard,
    element: <DashboardLayout />,
    children: [
      {
        path: RouteIdEnum.Root,
        element: <Navigate to={RouteIdEnum.Home} />,
      },
      {
        path: RouteIdEnum.Home,
        element: <HomePage />,
      },
      {
        path: RouteIdEnum.Profile,
        element: <ProfilePage />,
      },
      {
        path: RouteIdEnum.Theme,
        element: <PagesLayout />,
        children: [
          {
            path: RouteIdEnum.Root,
            element: <ThemePage />,
          },
          {
            path: RouteIdEnum.Colors,
            element: <ColorsPage />,
          },
          {
            path: RouteIdEnum.Typographies,
            element: <TypographiesPage />,
          },
        ],
      },
      {
        path: RouteIdEnum.Component,
        element: <PagesLayout />,
        children: [
          {
            path: RouteIdEnum.Root,
            element: <ComponentPage />,
          },
          {
            path: RouteIdEnum.Base,
            element: <Outlet />,
            children: [
              { path: RouteIdEnum.Root, element: <BasePage /> },
              {
                path: RouteIdEnum.Cards,
                element: <CardsPage />,
              },
              {
                path: RouteIdEnum.Breadcrumbs,
                element: <BreadcrumbsPage />,
              },
              {
                path: RouteIdEnum.Spinners,
                element: <SpinnersPage />,
              },
              {
                path: RouteIdEnum.Tabs,
                element: <TabsPage />,
              },
              {
                path: RouteIdEnum.Progress,
                element: <ProgressPage />,
              },
              {
                path: RouteIdEnum.Tooltip,
                element: <TooltipsPage />,
              },
              {
                path: RouteIdEnum.Stepper,
                element: <SteppersPage />,
              },
              {
                path: RouteIdEnum.Carousel,
                element: <CarouselPage />,
              },
              {
                path: RouteIdEnum.Pagination,
                element: <PaginationPage />,
              },
              {
                path: RouteIdEnum.Table,
                element: <TablePage />,
              },
            ],
          },
          {
            path: RouteIdEnum.Buttons,
            element: <ButtonsPage />,
          },
          {
            path: RouteIdEnum.Charts,
            element: <ChartsPage />,
          },
          {
            path: RouteIdEnum.Forms,
            element: <Outlet />,
            children: [
              {
                path: RouteIdEnum.Root,
                element: <FormsPage />,
              },
              {
                path: RouteIdEnum.ColorPicker,
                element: <ColorPickerPage />,
              },
              {
                path: RouteIdEnum.TextInputs,
                element: <TextInputsPage />,
              },
              {
                path: RouteIdEnum.FileInputs,
                element: <FileInputPage />,
              },
              {
                path: RouteIdEnum.Select,
                element: <SelectPage />,
              },
              {
                path: RouteIdEnum.CheckAndRadio,
                element: <CheckAndRadioPage />,
              },
              {
                path: RouteIdEnum.Range,
                element: <RangePage />,
              },
            ],
          },
          {
            path: RouteIdEnum.Notifications,
            element: <Outlet />,
            children: [
              {
                path: RouteIdEnum.Root,
                element: <NotificationsPage />,
              },
              {
                path: RouteIdEnum.Alerts,
                element: <AlertsPage />,
              },
              {
                path: RouteIdEnum.Badge,
                element: <BadgePage />,
              },
              {
                path: RouteIdEnum.Modals,
                element: <ModalsPage />,
              },
              {
                path: RouteIdEnum.Toasts,
                element: <ToastPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: RouteIdEnum.Any,
    element: <NotFoundPage />,
  },
  {
    path: RouteIdEnum.NotFound,
    element: <NotFoundPage />,
  },
  {
    path: RouteIdEnum.InternalServerError,
    element: <ServerErrorPage />,
  },
];
