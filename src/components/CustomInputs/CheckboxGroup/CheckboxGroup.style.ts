import { Stack, styled } from '@mui/material';

export const StyledContainer = styled(Stack)(
  () =>
    ({ isdisabled, isreadonly }: { isdisabled?: string; isreadonly?: string }) => ({
      pointerEvents: isdisabled === `${true}` ? 'none' : undefined,
      opacity: isreadonly === `${true}` ? 0.8 : 1,
    }),
);
