import { OrderType } from './HeadCell';

export interface Paginator {
  orderBy: string;
  order: OrderType;
  rowsPerPage: number;
  page: number;
  searchText: string;
  groupBy?: string;
  searchBy?: string;
  paranoid?: boolean;
  filterBy?: string;
}

export interface PaginatorMethods {
  changePage: (newPage: number) => void;
  changeRowsPerPage: (newRowsPerPage: number) => void;
  changeOrderBy?: (property: string) => void;
  changeSearchText?: (text: string) => void;
}
