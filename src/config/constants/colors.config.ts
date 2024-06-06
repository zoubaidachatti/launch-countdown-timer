import { fillArray } from '@/utils';

const textPrimary = '#14171a';
const divider = '#14171a';

export const BoxShadow = 'rgb(0 0 0 / 7%) 0px 3px 12px';

export const BoxShadowDarkMode = '#14171a96 0px 3px 12px';

export const BoxShadows = ['none', ...fillArray(24, BoxShadow)];

export const BoxShadowsDarkMode = ['none', ...fillArray(24, BoxShadowDarkMode)];

export const ColorsConfig = {
  primary: {
    main: '#00388E',
    light: '#0252cc',
    dark: '#022a69',
  },
  secondary: {
    main: '#940135',
    light: '#dc004e',
    dark: '#590221',
    contrastText: '#F8F9FA',
  },
  error: {
    main: '#b33127',
    light: '#f44336',
    dark: '#82241d',
    contrastText: '#F8F9FA',
  },
  warning: {
    main: '#cf7c02',
    light: '#ff9800',
    dark: '#a16103',
    contrastText: textPrimary,
  },
  info: {
    main: '#1974bd',
    light: '#2196f3',
    dark: '#13558a',
    contrastText: '#F8F9FA',
  },
  success: {
    main: '#4caf50',
    light: '#66e86b',
    dark: '#38803b',
    contrastText: textPrimary,
  },
  grey: {
    50: '#F8F9FA',
    100: '#E9ECEF',
    200: '#DEE2E6',
    300: '#CED4DA',
    400: '#ADB5BD',
    500: '#6C757D',
    600: '#495057',
    700: '#343A40',
    800: '#212529',
    900: '#14171a',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#343A40',
  },
  text: {
    primary: textPrimary,
    secondary: '#212529',
    disabled: '#303030',
  },
  divider: divider,
  background: {
    paper: '#F8F9FA',
    default: '#f8f9fa',
  },
  action: {
    active: '#14171a',
    hover: '#212529',
    hoverOpacity: 0.08,
    selected: '#212529',
    selectedOpacity: 0.14,
    disabled: '#303030',
    disabledBackground: '#303030',
    disabledOpacity: 0.38,
    focus: '#212529',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
