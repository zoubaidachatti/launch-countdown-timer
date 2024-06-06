import { fillArray } from '@/utils';

export const BoxShadow = 'rgb(0 0 0 / 7%) 0px 3px 12px';

export const BoxShadowDarkMode = '#14171a96 0px 3px 12px';

export const BoxShadows = ['none', ...fillArray(24, BoxShadow)];

export const BoxShadowsDarkMode = ['none', ...fillArray(24, BoxShadowDarkMode)];

const greenMain = 'hsl(167, 40%, 24%)';
const greenLight = 'hsl(168, 32%, 55%)';

const white50 = 'hsl(0, 0%, 100%)';
const white100 = 'hsla(0, 0%, 100%, 0.37)';
const white200 = 'hsla(42, 92%, 90%, 0.192)';
const white300 = 'hsl(46, 55%, 94%)';
const white400 = 'hsl(210, 4%, 67%)';

const textPrimary = white400;
const divider = white400;

export const ColorsConfig = {
  primary: {
    main: greenMain,
    light: greenLight,
    dark: greenMain,
  },
  secondary: {
    main: 'hsl(7, 99%, 70%)',
    light: 'hsla(7, 99%, 70%, 0.493)',
    dark: 'hsl(7, 99%, 70%)',
    contrastText: white50,
  },
  error: {
    main: '#b33127',
    light: '#f44336',
    dark: '#82241d',
    contrastText: white50,
  },
  warning: {
    main: 'hsl(51, 100%, 49%)',
    light: 'hsla(51, 100%, 49%, 0.404)',
    dark: 'hsl(51, 100%, 49%)',
    contrastText: textPrimary,
  },
  info: {
    main: 'hsl(198, 62%, 26%)',
    light: 'hsl(228, 45%, 44%)',
    dark: 'hsl(212, 27%, 19%)',
    contrastText: white50,
  },
  success: {
    main: greenMain,
    light: greenLight,
    dark: greenMain,
    contrastText: textPrimary,
  },
  grey: {
    50: white50,
    100: white100,
    200: white200,
    300: white300,
    400: white400,
    500: white400,
    600: white400,
    700: white400,
    800: white400,
    900: '#000',
    A100: white400,
    A200: white400,
    A400: white400,
    A700: white400,
  },
  text: {
    primary: textPrimary,
    secondary: white400,
    disabled: white400,
  },
  divider: divider,
  background: {
    paper: white50,
    default: white50,
  },
  action: {
    active: white400,
    hover: white400,
    hoverOpacity: 0.08,
    selected: white400,
    selectedOpacity: 0.14,
    disabled: white400,
    disabledBackground: white400,
    disabledOpacity: 0.38,
    focus: white400,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
