import { ReactNode } from 'react';

export type BreadcrumbLink = {
  order: number;
  label: string;
  path: string;
  icon?: ReactNode;
  id: number | string;
};
