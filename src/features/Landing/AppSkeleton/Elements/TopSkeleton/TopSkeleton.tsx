import { Box, Stack } from '@mui/material';
import { ElementsBoxShadow, ElementsFill } from '../../';

export const TopSkeleton = () => {
  return (
    <Stack position={'absolute'} spacing={1} direction={'row'} top={9} left={9}>
      <Box
        sx={{
          boxShadow: ElementsBoxShadow,
          background: (theme) => ElementsFill(theme.palette.error.light, theme.palette.error.main),
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          boxShadow: ElementsBoxShadow,
          background: (theme) =>
            ElementsFill(theme.palette.warning.light, theme.palette.warning.main),
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          boxShadow: ElementsBoxShadow,
          background: (theme) =>
            ElementsFill(theme.palette.success.light, theme.palette.success.main),
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />
    </Stack>
  );
};

export default TopSkeleton;
