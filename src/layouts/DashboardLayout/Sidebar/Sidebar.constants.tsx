import ChartIcon from '@/assets/icons/area_chart.svg?react';
import RangeIcon from '@/assets/icons/arrow_range.svg?react';
import PagesIcon from '@/assets/icons/auto_stories.svg?react';
import BadgeIcon from '@/assets/icons/badge.svg?react';
import BreadcrumbIcon from '@/assets/icons/breadcrumbs.svg?react';
import ModalIcon from '@/assets/icons/breaking_news.svg?react';
import ErrorIcon from '@/assets/icons/broken_image.svg?react';
import CardIcon from '@/assets/icons/cards.svg?react';
import CheckIcon from '@/assets/icons/check_box.svg?react';
import SelectIcon from '@/assets/icons/checklist.svg?react';
import ColorPickerIcon from '@/assets/icons/color_picker.svg?react';
import FormIcon from '@/assets/icons/description.svg?react';
import RegisterIcon from '@/assets/icons/edit_square.svg?react';
import FileInputIcon from '@/assets/icons/file_input.svg?react';
import ProgressIcon from '@/assets/icons/hourglass.svg?react';
import AlertIcon from '@/assets/icons/info.svg?react';
import KeyIcon from '@/assets/icons/key.svg?react';
import LoginIcon from '@/assets/icons/login.svg?react';
import NewsPaperIcon from '@/assets/icons/newspaper.svg?react';
import NotificationIcon from '@/assets/icons/notifications.svg?react';
import PuzzleIcon from '@/assets/icons/puzzle.svg?react';
import QuestionIcon from '@/assets/icons/question_mark.svg?react';
import ButtonIcon from '@/assets/icons/rectangle.svg?react';
import PaginationIcon from '@/assets/icons/settings_ethernet.svg?react';
import SpinnerIcon from '@/assets/icons/spinners.svg?react';
import StepperIcon from '@/assets/icons/steppers.svg?react';
import TableIcon from '@/assets/icons/table_rows.svg?react';
import TabsIcon from '@/assets/icons/tabs.svg?react';
import DashboardIcon from '@/assets/icons/team_dashboard.svg?react';
import TextInputIcon from '@/assets/icons/text_inputs.svg?react';
import ToastIcon from '@/assets/icons/toast.svg?react';
import TooltipIcon from '@/assets/icons/tooltip.svg?react';
import TypographyIcon from '@/assets/icons/typography.svg?react';
import CarouselIcon from '@/assets/icons/view_carousel.svg?react';
import ColorsIcon from '@/assets/icons/water_drop.svg?react';

import { RouterPaths } from '@/config/constants/router.config';
import { ISidebarGroup } from '@/types/interfaces';

const theme = [
  {
    label: 'dashboard.colors',
    path: RouterPaths.DashboardPaths.ThemePaths.colorsPath,
    icon: <ColorsIcon />,
  },
  {
    label: 'dashboard.typographies',
    path: RouterPaths.DashboardPaths.ThemePaths.typographiesPath,
    icon: <TypographyIcon />,
  },
];

const components = [
  {
    label: 'dashboard.base',
    path: RouterPaths.DashboardPaths.componentPaths.basePaths.rootPath,
    icon: <PuzzleIcon />,
    items: [
      {
        label: 'dashboard.cards',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.cardPath,
        icon: <CardIcon />,
      },
      {
        label: 'dashboard.breadcrumbs',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.breadcrumbsPath,
        icon: <BreadcrumbIcon />,
      },
      {
        label: 'dashboard.tabs',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.tabsPath,
        icon: <TabsIcon />,
      },
      {
        label: 'dashboard.stepper',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.stepperPath,
        icon: <StepperIcon />,
      },
      {
        label: 'dashboard.carousel',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.carouselPath,
        icon: <CarouselIcon />,
      },
      {
        label: 'dashboard.pagination',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.paginationPath,
        icon: <PaginationIcon />,
      },
      {
        label: 'dashboard.table',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.tablePath,
        icon: <TableIcon />,
      },
      {
        label: 'dashboard.spinners',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.spinnersPath,
        icon: <SpinnerIcon />,
      },
      {
        label: 'dashboard.progress',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.progressPath,
        icon: <ProgressIcon />,
      },
      {
        label: 'dashboard.tooltip',
        path: RouterPaths.DashboardPaths.componentPaths.basePaths.tooltipPath,
        icon: <TooltipIcon />,
      },
    ],
  },
  {
    label: 'dashboard.buttons',
    path: RouterPaths.DashboardPaths.componentPaths.buttonsPaths.rootPath,
    icon: <ButtonIcon />,
  },
  {
    label: 'dashboard.charts',
    path: RouterPaths.DashboardPaths.componentPaths.chartsPaths.rootPath,
    icon: <ChartIcon />,
  },
  {
    label: 'dashboard.forms',
    path: RouterPaths.DashboardPaths.componentPaths.formsPaths.rootPath,
    icon: <FormIcon />,
    items: [
      {
        label: 'dashboard.text_inputs',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.textInputsPath,
        icon: <TextInputIcon />,
      },
      {
        label: 'dashboard.file_inputs',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.fileInputsPath,
        icon: <FileInputIcon />,
      },
      {
        label: 'dashboard.select',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.selectPath,
        icon: <SelectIcon />,
      },
      {
        label: 'dashboard.check_and_radio',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.checkAndRadioPath,
        icon: <CheckIcon />,
      },
      {
        label: 'dashboard.range',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.rangePath,
        icon: <RangeIcon />,
      },
      {
        label: 'dashboard.color_picker',
        path: RouterPaths.DashboardPaths.componentPaths.formsPaths.colorPickerPath,
        icon: <ColorPickerIcon />,
      },
    ],
  },
  {
    label: 'dashboard.notifications',
    path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.rootPath,
    icon: <NotificationIcon />,
    items: [
      {
        label: 'dashboard.alerts',
        path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.alertPath,
        icon: <AlertIcon />,
      },
      {
        label: 'dashboard.badge',
        path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.badgePath,
        icon: <BadgeIcon />,
      },
      {
        label: 'dashboard.modals',
        path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.modalPath,
        icon: <ModalIcon />,
      },
      {
        label: 'dashboard.toasts',
        path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.toastPath,
        icon: <ToastIcon />,
      },
    ],
  },
];

const extras = [
  {
    label: 'dashboard.pages',
    path: RouterPaths.RootPaths.rootPath,
    icon: <PagesIcon />,
    items: [
      {
        label: 'landing.landing_page',
        path: RouterPaths.RootPaths.rootPath,
        icon: <NewsPaperIcon />,
      },
      { label: 'auth.login', path: RouterPaths.AuthPaths.loginPath, icon: <LoginIcon /> },
      {
        label: 'auth.register',
        path: RouterPaths.RegisterPaths.inscriptionPath,
        icon: <RegisterIcon />,
      },
      {
        label: 'auth.forget_password_2',
        path: RouterPaths.AuthPaths.forgetPasswordPath,
        icon: <QuestionIcon />,
      },
      {
        label: 'auth.reset_password',
        path: RouterPaths.AuthPaths.resetPasswordPath,
        icon: <KeyIcon />,
      },
      { label: 'error.error404', path: RouterPaths.RootPaths.notFoundPath, icon: <ErrorIcon /> },
      {
        label: 'error.error500',
        path: RouterPaths.RootPaths.internalServerErrorPath,
        icon: <ErrorIcon />,
      },
    ],
  },
];

export const SidebarGroups: ISidebarGroup[] = [
  {
    sections: [
      {
        label: 'dashboard.dashboard',
        path: RouterPaths.DashboardPaths.homePath,
        icon: <DashboardIcon />,
      },
    ],
  },
  { label: 'dashboard.theme', sections: theme },
  { label: 'dashboard.components', sections: components },
  { label: 'dashboard.extra', sections: extras },
];
