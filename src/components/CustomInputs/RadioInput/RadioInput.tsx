import { CustomRadio } from '@/components';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RadioInputProps } from './RadioInput.type';

const RadioInput = ({
  label,
  name,
  readOnly,
  required,
  disabled,
  value,
  size,
  checked,
  onChange,
}: RadioInputProps) => {
  const { t } = useTranslation();
  return (
    <Stack direction={'row'} alignItems={'center'} gap={0.5} flexWrap={'wrap'}>
      <CustomRadio
        name={name}
        readOnly={readOnly}
        required={required}
        disabled={disabled}
        value={value}
        customsize={size}
        checked={checked}
        onChange={readOnly ? undefined : onChange}
      />
      <Typography
        variant={size === 'large' ? 'body1' : 'body2'}
        color={disabled ? 'text.disabled' : 'text.primary'}
      >
        {t(label)}
      </Typography>
    </Stack>
  );
};

export default RadioInput;
