import { Layout } from '@/config/constants';
import { styled, Table, TableContainer } from '@mui/material';

export const TableStyle = styled(Table)(
  ({ theme }) =>
    ({
      striped,
      stripecolor,
      hover,
    }: {
      striped?: string;
      stripecolor?: string;
      hover?: string;
    }) => ({
      borderCollapse: 'separate',
      borderSpacing: '0',
      width: '100%',
      tableLayout: 'fixed',
      th: { backgroundColor: theme.palette.background.paper },
      'tr:first-of-type td:first-of-type': {
        borderTopLeftRadius: Layout.borderRadius,
      },
      'tr:first-of-type td:last-of-type': {
        borderTopRightRadius: Layout.borderRadius,
      },
      'tr:last-of-type td:first-of-type': {
        borderBottomLeftRadius: Layout.borderRadius,
      },
      'tr:last-of-type td:last-of-type': {
        borderBottomRightRadius: Layout.borderRadius,
      },
      'tr:nth-of-type(odd)': {
        backgroundColor: striped === `${true}` ? stripecolor ?? theme.palette.grey[200] : undefined,
      },
      tr: {
        '&:hover': {
          opacity: hover === `${true}` ? 0.6 : undefined,
        },
      },
    }),
);
export const HeaderContainerStyle = styled(TableContainer)(() => ({
  height: 54,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
}));
