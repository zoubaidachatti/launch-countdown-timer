import VisibilityOffIcon from '@/assets/icons/visibility.svg?react';
import VisibilityIcon from '@/assets/icons/visibility_off.svg?react';
import { InputContainer, InputLabel } from '@/components';
import { GlobalVariables } from '@/config/constants';
import { InputType } from '@/config/enums';
import { InputAdornment } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledPasswordIconStack, StyledTextField } from './TextInput.style';
import { TextInputProps } from './TextInput.type';

export function TextInput({
  label,
  tooltip,
  name,
  type,
  value,
  disabled,
  placeholder,
  error,
  required,
  readOnly,
  textAlign,
  maxLength,
  onChange,
}: TextInputProps) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      (type === InputType.PHONE && event.target.value
        ? GlobalVariables.plus
        : GlobalVariables.emptyString) +
      event.target.value.replace(GlobalVariables.regex.number, GlobalVariables.emptyString);

    onChange(inputValue);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === InputType.NUMBER || type === InputType.PHONE) {
      onChangeNumber(event);
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <InputContainer>
      <InputLabel
        errorMsg={error?.message}
        label={label}
        tooltip={tooltip}
        name={name}
        required={required}
      />
      <StyledTextField
        textalign={textAlign}
        type={
          type === InputType.PASSWORD ? (showPassword ? InputType.TEXT : InputType.PASSWORD) : type
        }
        error={!!error}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={t(placeholder ?? '')}
        required={required}
        onChange={handleChange}
        inputProps={{
          maxLength,
          id: name,
        }}
        InputProps={{
          readOnly,
          endAdornment:
            !disabled && type === InputType.PASSWORD ? (
              <InputAdornment position="end">
                <StyledPasswordIconStack onClick={handleShowPassword}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </StyledPasswordIconStack>
              </InputAdornment>
            ) : undefined,
        }}
      />
    </InputContainer>
  );
}
