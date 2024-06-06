import { Stack } from '@mui/material';
import { InputLabel } from '../InputLabel/InputLabel';
import { SwitchChecked, SwitchContainer } from './SwitchInput.style';
import { SwitchInputProps } from './SwitchInput.type';
import { SwitchEnum } from '@/config/enums';

export const SwitchInput = ({
  label,
  name,
  value,
  disabled,
  readOnly,
  required,
  error,
  tooltip,
  size,
  onChange,
}: SwitchInputProps) => {
  const width = size === 'large' ? 60 : size === 'small' ? 30 : 40;
  const height = size === 'large' ? 28 : size === 'small' ? 15 : 18;

  const widthChecked = width / 2 - 2;
  const heightChecked = 'calc(100% - 4px)';
  const onClick = () => {
    onChange(value === SwitchEnum.on ? SwitchEnum.off : SwitchEnum.on);
  };

  return (
    <Stack direction={'row-reverse'} spacing={0.5} alignItems={'center'}>
      <InputLabel
        errorMsg={error?.message}
        label={label}
        tooltip={tooltip}
        name={name}
        required={required}
      />
      <SwitchContainer
        sx={{
          pointerEvents: disabled || readOnly ? 'none' : undefined,
          opacity: disabled || readOnly ? '0.5' : undefined,
          cursor: disabled || readOnly ? undefined : 'pointer',
        }}
        on={`${value === SwitchEnum.on}`}
        width={width}
        height={height}
        onClick={onClick}
      >
        <SwitchChecked
          width={widthChecked}
          height={heightChecked}
          right={value === SwitchEnum.on ? 2 : width / 2}
        />
      </SwitchContainer>
    </Stack>
  );
};
