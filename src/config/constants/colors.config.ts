import { fillArray } from '@/utils';

export const BoxShadow = 'rgb(0 0 0 / 7%) 0px 3px 12px';

export const BoxShadowDarkMode = '#14171a96 0px 3px 12px';

export const BoxShadows = ['none', ...fillArray(24, BoxShadow)];

export const BoxShadowsDarkMode = ['none', ...fillArray(24, BoxShadowDarkMode)];

const white50 = 'hsl(36, 100%, 99%)';
const white100 = 'hsl(233, 8%, 79%)';
const white200 = 'hsl(236, 13%, 42%)';
const white900 = 'hsl(240, 100%, 5%)';

const textPrimary = white200;
const divider = white200;

const primary = 'hsl(35, 77%, 62%)';
const secondary = 'hsl(5, 85%, 63%)';

export const ColorsConfig = {
  primary: {
    main: primary,
    light: primary,
    dark: primary,
  },
  secondary: {
    main: secondary,
    light: secondary,
    dark: secondary,
    contrastText: white200,
  },
  grey: {
    50: white50,
    100: white100,
    200: white200,
    300: white200,
    400: white200,
    500: white200,
    600: white200,
    700: white200,
    800: white200,
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
