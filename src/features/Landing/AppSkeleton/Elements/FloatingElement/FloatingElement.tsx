import { Box, Stack, alpha } from '@mui/material';
import { ElementsBorderRadius, ElementsBoxShadow, ElementsBoxShadow2 } from '../../';

export const FloatingElement = () => {
  return (
    <Stack
      justifyContent={'space-evenly'}
      alignItems={'center'}
      right={{ xs: -8, sm: -19 }}
      top={-20}
      width={{ xs: 129, sm: 150, md: 174, lg: 203 }}
      height={{ xs: 139, sm: 138, md: 158, lg: 186 }}
      position={'absolute'}
      spacing={1.25}
      boxShadow={ElementsBoxShadow}
      borderRadius={ElementsBorderRadius}
      paddingInline={'10px'}
      sx={{
        backdropFilter: 'blur(5px)',
        background: (theme) => alpha(theme.palette.grey[100], 0.7),
      }}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <Stack
          direction={'row'}
          key={`stack_${i}`}
          width="100%"
          spacing={'10px'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
        >
          <Box
            sx={{
              boxShadow: ElementsBoxShadow2,
              background: (theme) => alpha(theme.palette.grey[100], 0.9),
              width: 20,
              height: 20,
              borderRadius: '50%',
            }}
          />
          <Stack width="calc(100% - 40px)" spacing={0.5}>
            {Array.from({ length: 3 }).map((_el, j) => (
              <Box
                key={`box_${i}_${j}`}
                sx={{
                  boxShadow: ElementsBoxShadow2,
                  background: (theme) => alpha(theme.palette.grey[100], 0.9),
                  width: `calc(100% - ${j * i * 10}px)`,
                  height: 4,
                  borderRadius: ElementsBorderRadius,
                }}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default FloatingElement;
