import { PaginationColor, PaginationShape, PaginationVariant, SizeType } from '@/types/interfaces';

export interface PaginatorButtonsProps {
  selectedValue: number;
  total?: number;
  perPageText?: string;
  variant?: PaginationVariant;
  shape?: PaginationShape;
  color?: PaginationColor;
  size?: SizeType;
  onButtonClick: (n: number) => void;
}
