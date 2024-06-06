import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomCheckBox } from '..';
import { CheckboxInputProps } from './CheckboxInput.type';

const CheckboxInput = ({
  label,
  name,
  readOnly,
  required,
  disabled,
  value,
  size,
  checked,
  onChange,
}: CheckboxInputProps) => {
  const { t } = useTranslation();
  return (
    <Stack direction={'row'} alignItems={'center'} gap={0.5} flexWrap={'wrap'}>
      <CustomCheckBox
        name={name}
        readOnly={readOnly}
        required={required}
        disabled={disabled}
        value={value}
        size={size}
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

export default CheckboxInput;
