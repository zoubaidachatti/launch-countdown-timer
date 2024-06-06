import { MediaQueryEnum } from '@/config/enums';
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function useResponsive(
  query: MediaQueryEnum,
  key: Breakpoint,
  start?: number | Breakpoint,
  end?: number | Breakpoint,
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start || 'md', end || 'md'));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === MediaQueryEnum.UP) {
    return mediaUp;
  }

  if (query === MediaQueryEnum.DOWN) {
    return mediaDown;
  }

  if (query === MediaQueryEnum.BETWEEN) {
    return mediaBetween;
  }

  if (query === MediaQueryEnum.ONLY) {
    return mediaOnly;
  }

  return null;
}
