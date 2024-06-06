import { GlobalVariables } from '@/config/constants';
import { Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  StyledErrorIcon,
  StyledErrorMsg,
  StyledInfoIcon,
  StyledLabel,
} from '../CustomInputs.style';
import { InputLabelProps } from './InputLabel.type';

export function InputLabel({ label, name, tooltip, errorMsg, required }: InputLabelProps) {
  const { t } = useTranslation();
  return (
    <Stack spacing={1} direction="row" alignItems={'center'}>
      {label && (
        <StyledLabel htmlFor={name}>
          {t(label)}
          {required && (
            <Typography color={'error.main'} variant="body2">
              {GlobalVariables.required}
            </Typography>
          )}
        </StyledLabel>
      )}
      {tooltip && (
        <Tooltip arrow title={t(tooltip)}>
          <Stack>
            <StyledInfoIcon />
          </Stack>
        </Tooltip>
      )}
      {errorMsg && label && (
        <Tooltip
          arrow
          title={<StyledErrorMsg title={t(errorMsg)}>{t(errorMsg)}</StyledErrorMsg>}
          placement="top"
        >
          <Stack>
            <StyledErrorIcon />
          </Stack>
        </Tooltip>
      )}
    </Stack>
  );
}
