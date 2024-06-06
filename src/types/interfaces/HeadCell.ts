export interface HeadCell {
  id: string;
  label: string;
  align: HeadCellAlign;
  contentAlign?: HeadCellAlign;
  isAction?: boolean;
  isSelect?: boolean;
  isAvatar?: boolean;
  xsWidth?: number;
  isNotSortable?: boolean;
  marginLeft?: number;
  marginRight?: number;
  headMarginLeft?: number;
  headMarginRight?: number;
}

export interface HeadCellOption {
  id: number | string;
  label: string;
}

export const ASC = 'asc';
export const DESC = 'desc';

export type OrderType = 'asc' | 'desc';

export type HeadCellAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
