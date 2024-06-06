import { lazy } from 'react';

const AlertsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/NotificationsPage/AlertsPage/AlertsPage'),
);
const BadgePage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/NotificationsPage/BadgePage/BadgePage'),
);
const BasePage = lazy(() => import('@/pages/DashboardPages/ComponentPage/BasePage/BasePage'));
const BreadcrumbsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/BreadcrumbsPage/BreadcrumbsPage'),
);
const ButtonsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/ButtonsPage/ButtonsPage'),
);
const CardsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/CardsPage/CardsPage'),
);
const CarouselPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/CarouselPage/CarouselPage'),
);
const ChartsPage = lazy(() => import('@/pages/DashboardPages/ComponentPage/ChartsPage/ChartsPage'));
const CheckAndRadioPage = lazy(
  () =>
    import('@/pages/DashboardPages/ComponentPage/FormsPage/CheckAndRadioPage/CheckAndRadioPage'),
);
const ColorPickerPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/FormsPage/ColorPickerPage/ColorPickerPage'),
);
const ColorsPage = lazy(() => import('@/pages/DashboardPages/ThemePages/ColorsPage/ColorsPage'));
const ComponentPage = lazy(() => import('@/pages/DashboardPages/ComponentPage/ComponentPage'));
const FileInputPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/FormsPage/FileInputPage/FileInputPage'),
);
const ForgetPasswordPage = lazy(
  () => import('@/pages/AuthPages/ForgetPasswordPage/ForgetPasswordPage'),
);
const FormsPage = lazy(() => import('@/pages/DashboardPages/ComponentPage/FormsPage/FormsPage'));
const HomePage = lazy(() => import('@/pages/DashboardPages/HomePage/HomePage'));
const LandingPage = lazy(() => import('@/pages/OtherPages/LandingPage/LandingPage'));
const LoginPage = lazy(() => import('@/pages/AuthPages/LoginPage/LoginPage'));
const ModalsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/NotificationsPage/ModalsPage/ModalsPage'),
);
const NotificationsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/NotificationsPage/NotificationsPage'),
);
const NotFoundPage = lazy(() => import('@/pages/OtherPages/NotFoundPage/NotFoundPage'));
const PaginationPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/PaginationPage/PaginationPage'),
);
const ProfilePage = lazy(() => import('@/pages/DashboardPages/ProfilePage/ProfilePage'));
const ProgressPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/ProgressPage/ProgressPage'),
);
const RangePage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/FormsPage/RangePage/RangePage'),
);
const RegisterPage = lazy(() => import('@/pages/AuthPages/RegisterPage/RegisterPage'));
const ResetPasswordPage = lazy(
  () => import('@/pages/AuthPages/ResetPasswordPage/ResetPasswordPage'),
);
const SelectPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/FormsPage/SelectPage/SelectPage'),
);
const ServerErrorPage = lazy(() => import('@/pages/OtherPages/ServerErrorPage/ServerErrorPage'));
const SpinnersPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/SpinnersPage/SpinnersPage'),
);
const SteppersPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/SteppersPage/SteppersPage'),
);
const TablePage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/TablePage/TablePage'),
);
const TabsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/TabsPage/TabsPage'),
);
const TextInputsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/FormsPage/TextInputsPage/TextInputsPage'),
);
const ThemePage = lazy(() => import('@/pages/DashboardPages/ThemePages/ThemePage'));
const ToastPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/NotificationsPage/ToastPage/ToastPage'),
);
const TooltipsPage = lazy(
  () => import('@/pages/DashboardPages/ComponentPage/BasePage/TooltipsPage/TooltipsPage'),
);
const TypographiesPage = lazy(
  () => import('@/pages/DashboardPages/ThemePages/TypographiesPage/TypographiesPage'),
);

export {
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
  NotificationsPage,
  NotFoundPage,
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
};
