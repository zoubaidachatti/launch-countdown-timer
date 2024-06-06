import Icon2 from '@/assets/icons/calendar_month.svg?react';
import Icon4 from '@/assets/icons/description.svg?react';
import DoubleArrow from '@/assets/icons/double_arrow.svg?react';
import Icon3 from '@/assets/icons/sunny.svg?react';
import Icon1 from '@/assets/icons/team_dashboard.svg?react';
import Icon5 from '@/assets/icons/warning.svg?react';
import { BreadcrumbsVariants } from '@/config/enums';
import { BreadcrumbLink } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';
import { ReactNode } from 'react';
import { StyledBreadcrumb } from './BreadcrumbsPage.style';

const icons = [
  <Icon1 key={'icon1'} />,
  <Icon2 key={'icon2'} />,
  <Icon3 key={'icon3'} />,
  <Icon4 key={'icon4'} />,
  <Icon5 key={'icon5'} />,
];

export const uniqueIds = generateUniqueIds(9);

export const breadcrumbsVariants = [
  {
    id: uniqueIds[0],
    label: 'breadcrumb.routes_breadcrumb',
    variant: BreadcrumbsVariants.Routes,
  },
  {
    id: uniqueIds[1],
    label: 'breadcrumb.categories_breadcrumb',
    variant: BreadcrumbsVariants.Categories,
  },
  {
    id: uniqueIds[2],
    label: 'breadcrumb.breadcrumbs_with_custom_separator',
    separator: <DoubleArrow />,
  },
  {
    id: uniqueIds[3],
    label: 'breadcrumb.styled_breadcrumb',
    variant: BreadcrumbsVariants.Categories,
    breadcrumbComponent: ({ children }: { children: ReactNode }) => (
      <StyledBreadcrumb>{children}</StyledBreadcrumb>
    ),
  },
];

export const BreadcrumbsLinks: BreadcrumbLink[] = [
  {
    label: 'breadcrumb.menu_1',
    order: 0,
    path: '#',
    id: uniqueIds[4],
  },
  {
    label: 'breadcrumb.menu_2',
    order: 1,
    path: '#',
    id: uniqueIds[5],
  },
  {
    label: 'breadcrumb.menu_3',
    order: 2,
    path: '#',
    id: uniqueIds[6],
  },
  {
    label: 'breadcrumb.menu_4',
    order: 3,
    path: '#',
    id: uniqueIds[7],
  },
  {
    label: 'breadcrumb.menu_5',
    order: 4,
    path: '#',
    id: uniqueIds[8],
  },
];

export const BreadcrumbLinksWithIcons = BreadcrumbsLinks.map((link, ind) => ({
  ...link,
  icon: icons[ind],
}));
