import { Layout } from '@/config/constants';
import { Theme } from '@mui/material';

export default function DateCalendar(theme: Theme) {
  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          borderRadius: Layout.borderRadius,
          '& .MuiPickersCalendarHeader-root': {
            svg: {
              fill: theme.palette.primary.main,
            },
          },
          '& .MuiDayCalendar-header span': {
            color: theme.palette.primary.main,
            fontWeight: 600,
          },
          '& .MuiButtonBase-root': {
            borderRadius: Layout.borderRadius,
          },
          '& .MuiPickersDay-today': {
            border: `1px solid ${theme.palette.primary.main} !important`,
          },
        },
      },
    },
  };
}
