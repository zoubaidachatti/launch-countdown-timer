import { Box, Stack, alpha } from '@mui/material';
import { ElementsBorderRadius, ElementsBoxShadow, ElementsBoxShadow2, ElementsFill } from '../../';

export const SearchBar = () => {
  return (
    <Stack
      boxShadow={ElementsBoxShadow}
      borderRadius={ElementsBorderRadius}
      alignItems={'center'}
      justifyContent={'center'}
      position={'absolute'}
      width="calc(100% - 48px)"
      height={20}
      top={40}
      left={24}
      sx={{
        background: (theme) => ElementsFill(theme.palette.grey[50], theme.palette.grey[200]),
      }}
    >
      <Stack width={'90%'} direction={'row'} spacing={0.5}>
        <Box
          boxShadow={ElementsBoxShadow2}
          height={3}
          borderRadius={ElementsBorderRadius}
          sx={{
            background: (theme) =>
              ElementsFill(
                alpha(theme.palette.primary.main, 0.4),
                alpha(theme.palette.primary.light, 0.4),
              ),
          }}
          width={'20%'}
        />
        <Box
          boxShadow={ElementsBoxShadow2}
          height={3}
          borderRadius={ElementsBorderRadius}
          sx={{
            background: (theme) =>
              ElementsFill(
                alpha(theme.palette.primary.main, 0.4),
                alpha(theme.palette.primary.light, 0.4),
              ),
          }}
          width={4}
        />
        <Box
          boxShadow={ElementsBoxShadow2}
          height={3}
          borderRadius={ElementsBorderRadius}
          sx={{
            background: (theme) =>
              ElementsFill(
                alpha(theme.palette.primary.main, 0.4),
                alpha(theme.palette.primary.light, 0.4),
              ),
          }}
          width={'10%'}
        />
      </Stack>
    </Stack>
  );
};

export default SearchBar;
