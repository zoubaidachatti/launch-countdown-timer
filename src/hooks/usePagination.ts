import { GlobalVariables } from '@/config/constants';
import { ASC, DESC, Paginator } from '@/types/interfaces';
import { useState } from 'react';
import { useDebounce } from '.';

const INITIAL_PAGINATOR: Paginator = {
  rowsPerPage: GlobalVariables.pagination.elementsPerPage.min,
  orderBy: GlobalVariables.emptyString,
  order: DESC,
  page: 1,
  searchText: GlobalVariables.emptyString,
};

export const usePagination = (initialPaginator?: Paginator | null) => {
  const [paginator, setPaginator] = useState(initialPaginator ?? INITIAL_PAGINATOR);

  const debouncedPaginator = useDebounce(paginator) as Paginator;

  const changePage = (newPage: number) => {
    setPaginator({
      ...paginator,
      page: newPage,
    });
  };

  const changeRowsPerPage = (newRowsPerPage: number) => {
    setPaginator({
      ...paginator,
      rowsPerPage: newRowsPerPage,
      page: 1,
    });
  };

  const changeOrderBy = (property: string) => {
    const isDesc = paginator.orderBy === property && paginator.order === DESC;
    setPaginator({
      ...paginator,
      page: GlobalVariables.pagination.firstPage,
      order: isDesc ? ASC : DESC,
      orderBy: property,
    });
  };

  const changeSearchText = (text: string) => {
    setPaginator({
      ...paginator,
      page: GlobalVariables.pagination.firstPage,
      searchText: text,
    });
  };

  const resetPaginator = () => setPaginator(initialPaginator ?? INITIAL_PAGINATOR);

  return {
    paginator,
    debouncedPaginator,
    changeRowsPerPage,
    changeOrderBy,
    changeSearchText,
    changePage,
    resetPaginator,
    paginatorMethods: {
      changeRowsPerPage,
      changeOrderBy,
      changeSearchText,
      changePage,
      resetPaginator,
    },
  };
};
