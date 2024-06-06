import { TableCell, styled } from '@mui/material';

export const RootStyle = styled(TableCell)(({ theme }) => ({
  paddingBlock: 8,
  paddingInline: 0,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));
