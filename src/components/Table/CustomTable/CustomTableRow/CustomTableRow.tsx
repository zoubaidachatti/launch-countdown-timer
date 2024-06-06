import { TableRow } from '@mui/material';
import { CustomTableRowProps } from './CustomTableRow.type';

export const CustomTableRow = ({
  children,
  height,
  backgroundColor,
}: Readonly<CustomTableRowProps>) => {
  return <TableRow sx={{ height, backgroundColor }}>{children}</TableRow>;
};
