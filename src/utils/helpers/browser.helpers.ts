import { AppModeEnum } from '@/config/enums';

export function getBrowserMode(): AppModeEnum.Dark | AppModeEnum.Light {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkMode ? AppModeEnum.Dark : AppModeEnum.Light;
}
