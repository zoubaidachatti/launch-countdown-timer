import { fillArray } from '@/utils';

export const BoxShadow = 'rgb(0 0 0 / 7%) 0px 3px 12px';

export const BoxShadowDarkMode = '#14171a96 0px 3px 12px';

export const BoxShadows = ['none', ...fillArray(24, BoxShadow)];

export const BoxShadowsDarkMode = ['none', ...fillArray(24, BoxShadowDarkMode)];

const white50 = 'hsl(0, 0%, 100%)';
const white100 = 'hsl(236, 21%, 26%)';
const white200 = 'hsl(235, 16%, 14%)';
const white300 = '#2D2F45';
const white400 = '#343650';
const white900 = '#191a24';

const textPrimary = white200;
const divider = white200;

const primary = 'hsl(237, 18%, 59%) ';
const secondary = 'hsl(345, 95%, 68%)';

export const ColorsConfig = {
  primary: {
    main: primary,
    light: primary,
    dark: '#261e2f',
  },
  secondary: {
    main: secondary,
    light: '#FB6087',
    dark: 'rgb(251,86,127)',
    contrastText: white200,
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
    900: white900,
    A100: white200,
    A200: white200,
    A400: white200,
    A700: white200,
  },
  text: {
    primary: textPrimary,
    secondary: white200,
    disabled: white200,
  },
  divider: divider,
  background: {
    paper: white50,
    default: white50,
  },
  action: {
    active: white200,
    hover: white200,
    hoverOpacity: 0.08,
    selected: white200,
    selectedOpacity: 0.14,
    disabled: white200,
    disabledBackground: white200,
    disabledOpacity: 0.38,
    focus: white200,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
