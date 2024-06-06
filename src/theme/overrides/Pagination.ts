import { ColorsConfig, Layout } from '@/config/constants';
import { Theme, alpha } from '@mui/material';

export default function Pagination(theme: Theme) {
  return {
    MuiPagination: {
      styleOverrides: {
        root: { ul: { rowGap: 8 } },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.grey[300],
          borderRadius: '50%',
          height: 35,
          width: 35,
          svg: {
            fill: theme.palette.grey[900],
          },
          '&.Mui-selected.Mui-disabled': {
            backgroundColor: theme.palette.grey[400],
            color: ColorsConfig.grey[900],
          },
        },
        sizeLarge: { height: 40, width: 40 },
        sizeSmall: { height: 30, width: 30 },
        ellipsis: {
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
        outlined: {
          '&.Mui-selected.Mui-disabled': {
            borderColor: theme.palette.grey[400],
            color: ColorsConfig.grey[900],
          },
        },
        outlinedPrimary: {
          ':hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.5),
            borderColor: theme.palette.primary.light,
          },
        },
        textPrimary: {
          ':hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.5),
            borderColor: theme.palette.primary.light,
          },
        },
        outlinedSecondary: {
          ':hover': {
            backgroundColor: alpha(theme.palette.secondary.light, 0.5),
            borderColor: theme.palette.secondary.light,
          },
        },
        textSecondary: {
          ':hover': {
            backgroundColor: alpha(theme.palette.secondary.light, 0.5),
            borderColor: theme.palette.secondary.light,
          },
        },
        rounded: {
          borderRadius: Layout.borderRadius,
        },
      },
    },
  };
}
