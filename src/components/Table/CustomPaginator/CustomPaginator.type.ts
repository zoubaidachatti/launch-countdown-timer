import {
  PaginationColor,
  PaginationShape,
  PaginationVariant,
  PaginatorMethods,
  SizeType,
} from '@/types/interfaces';
import { FunctionComponent, SVGProps } from 'react';

export interface CustomPaginatorProps {
  paginatorMethods: PaginatorMethods;
  totalRows: number;
  rowsPerPage: number;
  page: number;
  boundaryCount?: number;
  siblingCount?: number;
  variant?: PaginationVariant;
  shape?: PaginationShape;
  color?: PaginationColor;
  disabled?: boolean;
  size?: SizeType;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  showRowsPerPage?: boolean;
  CustomBackIcon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  CustomNextIcon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}
