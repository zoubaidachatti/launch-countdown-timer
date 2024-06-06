import { Box, Stack } from '@mui/material';
import {
  ElementsBorderRadius,
  ElementsBoxShadow,
  ElementsBoxShadow2,
  ElementsFill,
} from '../../../';

export const LeftCard = () => {
  return (
    <Stack
      spacing={1.25}
      boxShadow={ElementsBoxShadow}
      borderRadius={ElementsBorderRadius}
      width={'40%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      sx={{
        background: (theme) =>
          ElementsFill(theme.palette.primary.main, theme.palette.primary.light),
      }}
    >
      <Stack spacing={1} direction={'row'}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={`circle_${index}`}
            sx={{
              boxShadow: ElementsBoxShadow2,
              background: (theme) => theme.palette.info.light,
              width: 7,
              height: 7,
              borderRadius: '50%',
            }}
          />
        ))}
      </Stack>
      <Stack spacing={1} direction={'column'} width={'100%'} alignItems={'center'}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={`line_${index}`}
            sx={{
              boxShadow: ElementsBoxShadow2,
              background: (theme) => theme.palette.info.light,
              width: 'calc(100% - 30px)',
              height: 4,
              borderRadius: ElementsBorderRadius,
            }}
          />
        ))}
      </Stack>
      <Stack width="100%" alignItems={'center'}>
        <Box
          sx={{
            boxShadow: ElementsBoxShadow2,
            background: (theme) => theme.palette.info.light,
            width: 'calc(100% - 40px)',
            height: 19,
            borderRadius: 30,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default LeftCard;
