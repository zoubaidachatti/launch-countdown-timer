import { CircularProgress, Stack } from '@mui/material';

export const AppLoading = () => {
  return (
    <Stack width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress color="primary" />
    </Stack>
  );
};

export default AppLoading;
