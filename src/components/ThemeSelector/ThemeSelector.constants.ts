import {
  ColorsConfig,
  ForestGreenColorsConfig,
  MidnightPurpleColorsConfig,
  OceanBlueColorsConfig,
  RoyalGoldColorsConfig,
  SunsetRedColorsConfig,
} from '@/config/constants';
import { AppThemeEnum } from '@/config/enums';

export type AppTheme = {
  label: string;
  theme: AppThemeEnum;
  themeDark: AppThemeEnum;
  color: string;
};

export const themes: AppTheme[] = [
  {
    label: 'theme.default',
    theme: AppThemeEnum.Default,
    themeDark: AppThemeEnum.DefaultDark,
    color: ColorsConfig.primary.main,
  },
  {
    label: 'theme.forest_green',
    theme: AppThemeEnum.ForestGreen,
    themeDark: AppThemeEnum.ForestGreenDark,
    color: ForestGreenColorsConfig.primary.main,
  },
  {
    label: 'theme.midnight_purple',
    theme: AppThemeEnum.MidnightPurple,
    themeDark: AppThemeEnum.MidnightPurpleDark,
    color: MidnightPurpleColorsConfig.primary.main,
  },
  {
    label: 'theme.ocean_blue',
    theme: AppThemeEnum.OceanBlue,
    themeDark: AppThemeEnum.OceanBlueDark,
    color: OceanBlueColorsConfig.primary.main,
  },
  {
    label: 'theme.royal_gold',
    theme: AppThemeEnum.RoyalGold,
    themeDark: AppThemeEnum.RoyalGoldDark,
    color: RoyalGoldColorsConfig.primary.main,
  },
  {
    label: 'theme.sunset_red',
    theme: AppThemeEnum.SunsetRed,
    themeDark: AppThemeEnum.SunsetRedDark,
    color: SunsetRedColorsConfig.primary.main,
  },
];
