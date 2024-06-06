import { InputContainer, InputLabel } from '@/components';
import { Stack, Typography } from '@mui/material';
import { isArray, isUndefined } from 'lodash';
import { StyledSlider } from './RangeInput.style';
import { RangeInputProps } from './RangeInput.type';

export const RangeInput = ({
  label,
  name,
  tooltip,
  value,
  error,
  size,
  marks,
  step,
  max,
  min,
  disabled,
  readOnly,
  rangeTooltip,
  showValue,
  required,
  onChange,
}: RangeInputProps) => {
  const valueExists = !isUndefined(value) && value !== null;

  const sliderValue = valueExists ? value : undefined;

  return (
    <InputContainer>
      <InputLabel errorMsg={error?.message} label={label} tooltip={tooltip} required={required} />
      <Stack direction="row" spacing={size === 'large' ? 2.5 : 2} alignItems={'center'}>
        <StyledSlider
          size={size === 'small' || size === 'medium' ? size : undefined}
          name={name}
          disabled={disabled}
          marks={marks}
          max={max}
          min={min}
          value={sliderValue}
          step={step}
          isreadonly={`${readOnly}`}
          islarge={`${size === 'large'}`}
          valueLabelDisplay={rangeTooltip}
          onChange={(_, v) => (readOnly ? undefined : onChange(v))}
        />
        {showValue && (
          <Typography color={'primary.main'} variant="body2" width={'10%'}>
            {valueExists ? (isArray(sliderValue) ? sliderValue.join('-') : sliderValue) : 0}
          </Typography>
        )}
      </Stack>
    </InputContainer>
  );
};
