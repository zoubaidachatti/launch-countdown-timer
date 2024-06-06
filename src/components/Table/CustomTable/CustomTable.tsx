import { NoDataFound } from '@/components';
import { Table, TableBody, TableContainer } from '@mui/material';
import { useRef } from 'react';
import { TableBodySkeleton, TableListHead } from '..';
import { HeaderContainerStyle, TableStyle } from './CustomTable.style';
import { CustomTableProps } from './CustomTable.type';

export const CustomTable = ({
  isData,
  haveNextPage,
  headCells,
  isFetching,
  isLoading,
  error,
  noAction,
  noDataMessage,
  isAllSelected,
  height,
  maxHeight,
  minWidth,
  children,
  orderBy,
  direction,
  hideHeader,
  rowHeight,
  striped,
  stripeColor,
  hoverEffect,
  changeOrderBy,
  selectAllRows,
}: CustomTableProps) => {
  const firstTableRef = useRef<HTMLDivElement>(null);

  const handleTableScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (firstTableRef.current) {
      firstTableRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  return (
    <>
      <HeaderContainerStyle ref={firstTableRef}>
        <Table sx={{ minWidth }}>
          {!hideHeader && (
            <TableListHead
              isAllSelected={isAllSelected}
              headCells={headCells}
              onRequestSort={(p) => changeOrderBy?.(p)}
              noAction={noAction}
              onSelectAll={selectAllRows}
              orderBy={orderBy}
              direction={direction}
            />
          )}
        </Table>
      </HeaderContainerStyle>
      <TableContainer
        onScroll={handleTableScroll}
        sx={{
          paddingTop: '11px',
          height: maxHeight,
          overflowY: isData ? 'auto' : 'hidden',
        }}
      >
        <TableStyle
          sx={{ minWidth }}
          striped={`${striped}`}
          stripecolor={stripeColor}
          hover={`${hoverEffect}`}
        >
          <TableBody sx={{ height }}>
            {isData && children}
            {(isLoading || isFetching) && (
              <TableBodySkeleton rowHeight={rowHeight} headCells={headCells} />
            )}
            {(haveNextPage || isLoading || isFetching) && (
              <TableBodySkeleton rowHeight={rowHeight} headCells={headCells} />
            )}
          </TableBody>
        </TableStyle>
        {!isData && !isFetching && (
          <NoDataFound message={noDataMessage ?? error ?? ''} minHeight={'calc(100% - 52px)'} />
        )}
      </TableContainer>
    </>
  );
};
