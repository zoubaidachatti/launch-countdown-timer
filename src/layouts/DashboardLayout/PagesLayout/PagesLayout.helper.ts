import { RouterPaths } from '@/config/constants/router.config';
import { SidebarGroups } from '@/layouts/DashboardLayout/Sidebar/Sidebar.constants';
import { BreadcrumbLink } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';

const routes = [
  ...SidebarGroups.flatMap((group) => group.sections).flatMap(
    (section) => section.items ?? section,
  ),
  { label: 'dashboard.dashboard', path: RouterPaths.DashboardPaths.dashboardPath },
  { label: 'dashboard.base', path: RouterPaths.DashboardPaths.componentPaths.basePaths.rootPath },
  {
    label: 'dashboard.components',
    path: RouterPaths.DashboardPaths.componentPaths.root,
  },
  {
    label: 'dashboard.forms',
    path: RouterPaths.DashboardPaths.componentPaths.formsPaths.rootPath,
  },
  {
    label: 'dashboard.notifications',
    path: RouterPaths.DashboardPaths.componentPaths.notificationPaths.rootPath,
  },
  {
    label: 'dashboard.theme',
    path: RouterPaths.DashboardPaths.ThemePaths.root,
  },
];

export function generateBreadcrumbsRoutes(pathname: string): BreadcrumbLink[] {
  const paths = pathname.split('/').filter((path) => path !== '');

  return paths.map((path, order) => {
    const uniqueIds = generateUniqueIds(paths.length);

    const route = routes.find(
      (routeItem) =>
        routeItem.path
          .split('/')
          .filter((p) => p !== '')
          .pop() === path,
    );

    return {
      order,
      id: uniqueIds[order],
      path: route?.path ?? '#',
      label: route?.label ?? path,
    };
  });
}
