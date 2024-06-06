import { Box, Stack } from '@mui/material';
import {
  ElementsBorderRadius,
  ElementsBoxShadow,
  ElementsBoxShadow2,
  ElementsFill,
} from '../../../';

export const RightCard = () => {
  return (
    <Stack
      padding={2}
      boxShadow={ElementsBoxShadow}
      borderRadius={ElementsBorderRadius}
      height={'100%'}
      width={'calc(60% - 8px)'}
      alignItems={'flex-start'}
      justifyContent={'flex-end'}
      spacing={1}
      sx={{
        background: (theme) => ElementsFill(theme.palette.info.main, theme.palette.info.light),
      }}
    >
      <Stack gap={'0.25rem'} direction={'row'} flexWrap={'wrap'} width="40%" height={'50%'}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Box
            key={`box_${index}`}
            sx={{
              boxShadow: ElementsBoxShadow2,
              background: (theme) => theme.palette.info.light,
              width: 'calc(50% - 0.125rem)',
              height: 'calc(50% - 0.125rem)',
              borderRadius: ElementsBorderRadius,
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default RightCard;
