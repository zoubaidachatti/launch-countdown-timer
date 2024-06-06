import { InputContainer, InputLabel } from '@/components';
import { ColorsConfig, GlobalVariables } from '@/config/constants';
import { isUndefined } from 'lodash';
import { StyledColorPicker } from './ColorPickerInput.style';
import { ColorPickerInputProps } from './ColorPickerInput.type';

export const ColorPickerInput = ({
  label,
  name,
  tooltip,
  error,
  value,
  disabled,
  readOnly,
  required,
  onChange,
}: ColorPickerInputProps) => {
  const valueExists =
    !isUndefined(value) && value !== null && value !== GlobalVariables.emptyString;
  const colorValue = valueExists ? value : ColorsConfig.grey[900];

  return (
    <InputContainer>
      <InputLabel
        errorMsg={error?.message}
        label={label}
        tooltip={tooltip}
        name={name}
        required={required}
      />
      <StyledColorPicker
        type="color"
        id={name}
        name={name}
        haserror={`${!!error}`}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        value={colorValue}
        onChange={(e) => (disabled || readOnly ? undefined : onChange(e.target.value))}
      />
    </InputContainer>
  );
};
