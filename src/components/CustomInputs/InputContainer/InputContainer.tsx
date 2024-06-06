import { Stack } from '@mui/material';
import { ReactNode } from 'react';

export function InputContainer({ children }: { children: ReactNode }) {
  return (
    <Stack direction={'column'} spacing={0.5}>
      {children}
    </Stack>
  );
}
