import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { CustomLinearProgressProps } from './CustomLinearProgress.type';

export const CustomLinearProgress = (props: CustomLinearProgressProps) => {
  const { labeled, labelSx, size } = props;
  return (
    <Stack alignItems="center" direction={'row'}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: size === 'large' ? 8 : size === 'small' ? 4 : 6 }}
        />
      </Box>
      {props.value && labeled && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={labelSx}>{`${Math.round(props.value)}%`}</Typography>
        </Box>
      )}
    </Stack>
  );
};
