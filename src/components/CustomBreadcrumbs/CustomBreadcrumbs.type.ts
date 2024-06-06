import { BreadcrumbsVariants } from '@/config/enums';
import { BreadcrumbLink } from '@/types/interfaces';
import { JSXElementConstructor, ReactNode } from 'react';

export type CustomBreadcrumbsProps = {
  links: BreadcrumbLink[];
  separator?: string | ReactNode;
  variant?: BreadcrumbsVariants;
  maxItems?: number;
  breadcrumbComponent?: JSXElementConstructor<{ children: ReactNode }>;
};
