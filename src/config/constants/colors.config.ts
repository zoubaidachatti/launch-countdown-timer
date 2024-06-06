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

export const DarkModeColorsConfig = {
  primary: ColorsConfig.primary,
  secondary: ColorsConfig.secondary,
  error: ColorsConfig.error,
  warning: ColorsConfig.warning,
  info: ColorsConfig.info,
  success: ColorsConfig.success,
  grey: {
    900: '#F8F9FA',
    800: '#E9ECEF',
    700: '#DEE2E6',
    600: '#CED4DA',
    500: '#ADB5BD',
    400: '#6C757D',
    300: '#495057',
    200: '#343A40',
    100: '#212529',
    50: '#14171a',
    A700: '#d5d5d5',
    A400: '#aaaaaa',
    A200: '#303030',
    A100: '#343A40',
  },
  text: {
    primary: '#F8F9FA',
    secondary: '#E9ECEF',
    disabled: '#aaaaaa',
  },
  divider: ColorsConfig.divider,
  background: {
    paper: '#212529',
    default: '#303030',
  },
  action: {
    active: '#F8F9FA',
    hover: '#E9ECEF',
    hoverOpacity: 0.08,
    selected: '#E9ECEF',
    selectedOpacity: 0.16,
    disabled: '#aaaaaa',
    disabledBackground: '#aaaaaa',
    disabledOpacity: 0.38,
    focus: '#E9ECEF',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

export const OceanBlueColorsConfig = {
  ...ColorsConfig,
  primary: {
    main: '#3391c9',
    light: '#7fbadc',
    dark: '#1d5d82',
  },
};

export const OceanBlueDarkColorsConfig = {
  ...DarkModeColorsConfig,
  primary: OceanBlueColorsConfig.primary,
};

export const MidnightPurpleColorsConfig = {
  ...ColorsConfig,
  primary: {
    main: '#632A7A',
    light: '#925EA6',
    dark: '#512363',
  },
};

export const MidnightPurpleDarkColorsConfig = {
  ...DarkModeColorsConfig,
  primary: MidnightPurpleColorsConfig.primary,
};

export const ForestGreenColorsConfig = {
  ...ColorsConfig,
  primary: {
    main: '#235347',
    light: '#367a69 ',
    dark: '#163832',
  },
};

export const ForestGreenDarkColorsConfig = {
  ...DarkModeColorsConfig,
  primary: ForestGreenColorsConfig.primary,
};

export const SunsetRedColorsConfig = {
  ...ColorsConfig,
  primary: {
    main: '#e63e28',
    light: '#f17b4f',
    dark: '#8E0000',
  },
};

export const SunsetRedDarkColorsConfig = {
  ...DarkModeColorsConfig,
  primary: SunsetRedColorsConfig.primary,
};

export const RoyalGoldColorsConfig = {
  ...ColorsConfig,
  primary: {
    main: '#c2a215',
    light: '#cfb83f',
    dark: '#4f4205',
  },
};

export const RoyalGoldDarkColorsConfig = {
  ...DarkModeColorsConfig,
  primary: RoyalGoldColorsConfig.primary,
};
