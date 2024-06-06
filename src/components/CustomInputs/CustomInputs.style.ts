import ErrorIcon from '@/assets/icons/error.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import { FormHelperText, styled } from '@mui/material';

export const StyledLabel = styled('label')(({ theme }) => ({
  fontSize: '0.85rem',
  color: theme.palette.text.secondary,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 3,
}));

export const StyledInfoIcon = styled(InfoIcon)(
  ({ theme }) =>
    ({ iserror }: { iserror?: string }) => ({
      fill: iserror === `${true}` ? theme.palette.error.main : theme.palette.grey[400],
      cursor: 'help',
      width: 15,
      height: 15,
    }),
);

export const StyledErrorIcon = styled(ErrorIcon)(({ theme }) => ({
  fill: theme.palette.error.main,
  cursor: 'pointer',
  width: 15,
  height: 15,
}));

export const StyledErrorMsg = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));
