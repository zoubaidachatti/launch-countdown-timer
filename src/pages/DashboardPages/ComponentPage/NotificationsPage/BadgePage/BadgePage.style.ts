import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  svg: {
    fill: theme.palette.text.primary,
  },
}));
