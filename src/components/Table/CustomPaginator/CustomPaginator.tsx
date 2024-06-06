import { Pagination, PaginationItem, Stack } from '@mui/material';
import { useMemo } from 'react';
import { CustomPaginatorProps } from './CustomPaginator.type';
import PaginationRowsPerPage from './PaginationRowsPerPage/PaginationRowsPerPage';

export const CustomPaginator = ({
  paginatorMethods,
  totalRows,
  rowsPerPage,
  page,
  boundaryCount,
  siblingCount,
  variant,
  shape,
  color,
  disabled,
  size,
  CustomBackIcon,
  CustomNextIcon,
  showFirstButton,
  showLastButton,
  hidePrevButton,
  hideNextButton,
  showRowsPerPage,
}: CustomPaginatorProps) => {
  const { changePage, changeRowsPerPage } = paginatorMethods;

  const numberOfPages = useMemo(
    () => (rowsPerPage && totalRows > rowsPerPage ? Number(totalRows / rowsPerPage) : 1),
    [rowsPerPage, totalRows],
  );

  return (
    <Stack direction="row" justifyContent={'space-between'} flexWrap={'wrap'} gap={'1rem'}>
      {showRowsPerPage && (
        <PaginationRowsPerPage
          variant={variant ?? 'outlined'}
          shape={shape ?? 'rounded'}
          color={color ?? 'primary'}
          size={size}
          selectedValue={rowsPerPage}
          onButtonClick={changeRowsPerPage}
          total={totalRows}
        />
      )}
      <Pagination
        page={page}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        onChange={(_, p) => changePage(p)}
        count={Math.ceil(numberOfPages)}
        variant={variant ?? 'outlined'}
        shape={shape ?? 'rounded'}
        color={color ?? 'primary'}
        disabled={disabled}
        size={size}
        renderItem={(item) => (
          <PaginationItem slots={{ previous: CustomBackIcon, next: CustomNextIcon }} {...item} />
        )}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        hidePrevButton={hidePrevButton}
        hideNextButton={hideNextButton}
      />
    </Stack>
  );
};
