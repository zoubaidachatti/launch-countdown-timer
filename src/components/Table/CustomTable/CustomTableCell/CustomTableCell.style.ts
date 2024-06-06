import { styled, TableCell } from '@mui/material';

export const RootStyle = styled(TableCell)(({ clickable }: { clickable?: string }) => ({
  cursor: clickable === `${true}` ? 'pointer' : 'default',
  borderBottom: 'none',
  padding: 0,
}));
