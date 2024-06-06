import { hexToRgb } from '@/utils';
import { Theme } from '@mui/material';

const LIGHT = 'colors.light';
const MAIN = 'colors.main';
const DARK = 'colors.dark';

export const colors = (theme: Theme) => {
  const primaryColors = [
    {
      id: 'primary.light',
      label: LIGHT,
      hex: theme.palette.primary.light,
      rgb: hexToRgb(theme.palette.primary.light),
    },
    {
      id: 'primary.main',
      label: MAIN,
      hex: theme.palette.primary.main,
      rgb: hexToRgb(theme.palette.primary.main),
    },
    {
      id: 'primary.dark',
      label: DARK,
      hex: theme.palette.primary.dark,
      rgb: hexToRgb(theme.palette.primary.dark),
    },
  ];
  const secondaryColors = [
    {
      id: 'secondary.light',
      label: LIGHT,
      hex: theme.palette.secondary.light,
      rgb: hexToRgb(theme.palette.secondary.light),
    },
    {
      id: 'secondary.main',
      label: MAIN,
      hex: theme.palette.secondary.main,
      rgb: hexToRgb(theme.palette.secondary.main),
    },
    {
      id: 'secondary.dark',
      label: DARK,
      hex: theme.palette.secondary.dark,
      rgb: hexToRgb(theme.palette.secondary.dark),
    },
  ];
  const errorColors = [
    {
      id: 'error.light',
      label: LIGHT,
      hex: theme.palette.error.light,
      rgb: hexToRgb(theme.palette.error.light),
    },
    {
      id: 'error.main',
      label: MAIN,
      hex: theme.palette.error.main,
      rgb: hexToRgb(theme.palette.error.main),
    },
    {
      id: 'error.dark',
      label: DARK,
      hex: theme.palette.error.dark,
      rgb: hexToRgb(theme.palette.error.dark),
    },
  ];
  const warningColors = [
    {
      id: 'warning.light',
      label: LIGHT,
      hex: theme.palette.warning.light,
      rgb: hexToRgb(theme.palette.warning.light),
    },
    {
      id: 'warning.main',
      label: MAIN,
      hex: theme.palette.warning.main,
      rgb: hexToRgb(theme.palette.warning.main),
    },
    {
      id: 'warning.dark',
      label: DARK,
      hex: theme.palette.warning.dark,
      rgb: hexToRgb(theme.palette.warning.dark),
    },
  ];
  const infoColors = [
    {
      id: 'info.light',
      label: LIGHT,
      hex: theme.palette.info.light,
      rgb: hexToRgb(theme.palette.info.light),
    },
    {
      id: 'info.main',
      label: MAIN,
      hex: theme.palette.info.main,
      rgb: hexToRgb(theme.palette.info.main),
    },
    {
      id: 'info.dark',
      label: DARK,
      hex: theme.palette.info.dark,
      rgb: hexToRgb(theme.palette.info.dark),
    },
  ];
  const successColors = [
    {
      id: 'success.light',
      label: LIGHT,
      hex: theme.palette.success.light,
      rgb: hexToRgb(theme.palette.success.light),
    },
    {
      id: 'success.main',
      label: MAIN,
      hex: theme.palette.success.main,
      rgb: hexToRgb(theme.palette.success.main),
    },
    {
      id: 'success.dark',
      label: DARK,
      hex: theme.palette.success.dark,
      rgb: hexToRgb(theme.palette.success.dark),
    },
  ];
  const greyColors = [
    {
      id: 'colors.grey_50',
      label: 'colors.grey_50',
      hex: theme.palette.grey[50],
      rgb: hexToRgb(theme.palette.grey[50]),
    },
    {
      id: 'colors.grey_100',
      label: 'colors.grey_100',
      hex: theme.palette.grey[100],
      rgb: hexToRgb(theme.palette.grey[100]),
    },
    {
      id: 'colors.grey_200',
      label: 'colors.grey_200',
      hex: theme.palette.grey[200],
      rgb: hexToRgb(theme.palette.grey[200]),
    },
    {
      id: 'colors.grey_300',
      label: 'colors.grey_300',
      hex: theme.palette.grey[300],
      rgb: hexToRgb(theme.palette.grey[300]),
    },
    {
      id: 'colors.grey_400',
      label: 'colors.grey_400',
      hex: theme.palette.grey[400],
      rgb: hexToRgb(theme.palette.grey[400]),
    },
    {
      id: 'colors.grey_500',
      label: 'colors.grey_500',
      hex: theme.palette.grey[500],
      rgb: hexToRgb(theme.palette.grey[500]),
    },
    {
      id: 'colors.grey_600',
      label: 'colors.grey_600',
      hex: theme.palette.grey[600],
      rgb: hexToRgb(theme.palette.grey[600]),
    },
    {
      id: 'colors.grey_700',
      label: 'colors.grey_700',
      hex: theme.palette.grey[700],
      rgb: hexToRgb(theme.palette.grey[700]),
      isDark: true,
    },
    {
      id: 'colors.grey_800',
      label: 'colors.grey_800',
      hex: theme.palette.grey[800],
      rgb: hexToRgb(theme.palette.grey[800]),
      isDark: true,
    },
    {
      id: 'colors.grey_900',
      label: 'colors.grey_900',
      hex: theme.palette.grey[900],
      rgb: hexToRgb(theme.palette.grey[900]),
      isDark: true,
    },
    {
      id: 'colors.grey_A100',
      label: 'colors.grey_A100',
      hex: theme.palette.grey.A100,
      rgb: hexToRgb(theme.palette.grey.A100),
    },
    {
      id: 'colors.grey_A200',
      label: 'colors.grey_A200',
      hex: theme.palette.grey.A200,
      rgb: hexToRgb(theme.palette.grey.A200),
    },
    {
      id: 'colors.grey_A400',
      label: 'colors.grey_A400',
      hex: theme.palette.grey.A400,
      rgb: hexToRgb(theme.palette.grey.A400),
    },
    {
      id: 'colors.grey_A700',
      label: 'colors.grey_A700',
      hex: theme.palette.grey.A700,
      rgb: hexToRgb(theme.palette.grey.A700),
    },
  ];
  const textColors = [
    {
      id: 'colors.primary',
      label: 'colors.primary',
      hex: theme.palette.text.primary,
      rgb: hexToRgb(theme.palette.text.primary),
      isDark: true,
    },
    {
      id: 'colors.secondary',
      label: 'colors.secondary',
      hex: theme.palette.text.secondary,
      rgb: hexToRgb(theme.palette.text.secondary),
      isDark: true,
    },
    {
      id: 'colors.disabled',
      label: 'colors.disabled',
      hex: theme.palette.text.disabled,
      rgb: hexToRgb(theme.palette.text.disabled),
    },
  ];

  return {
    primaryColors,
    secondaryColors,
    errorColors,
    warningColors,
    infoColors,
    successColors,
    greyColors,
    textColors,
  };
};

export const colorsLists = (
  theme: Theme,
): {
  id: string;
  label: string;
  data: { id: string; label: string; hex: string; rgb: string; isDark?: boolean }[];
}[] => {
  const {
    errorColors,
    greyColors,
    infoColors,
    primaryColors,
    secondaryColors,
    successColors,
    textColors,
    warningColors,
  } = colors(theme);
  return [
    { id: 'colors.primary_colors', label: 'colors.primary_colors', data: primaryColors },
    { id: 'colors.secondary_colors', label: 'colors.secondary_colors', data: secondaryColors },
    { id: 'colors.success_colors', label: 'colors.success_colors', data: successColors },
    { id: 'colors.error_colors', label: 'colors.error_colors', data: errorColors },
    { id: 'colors.info_colors', label: 'colors.info_colors', data: infoColors },
    { id: 'colors.warning_colors', label: 'colors.warning_colors', data: warningColors },
    { id: 'colors.grey_colors', label: 'colors.grey_colors', data: greyColors },
    { id: 'colors.text_colors', label: 'colors.text_colors', data: textColors },
  ];
};
