import { InputContainer, InputLabel } from '@/components';
import { useTranslation } from 'react-i18next';
import { StyledTextArea } from './TextAreaInput.style';
import { TextAreaInputProps } from './TextAreaInput.type';

export function TextAreaInput({
  label,
  tooltip,
  name,
  value,
  disabled,
  placeholder,
  error,
  required,
  minHeight,
  textAlign,
  readOnly,
  maxLength,
  onChange,
}: TextAreaInputProps) {
  const { t } = useTranslation();

  return (
    <InputContainer>
      <InputLabel
        errorMsg={error?.message}
        label={label}
        tooltip={tooltip}
        name={name}
        required={required}
      />
      <StyledTextArea
        sx={{ height: minHeight ?? '100px', textAlign }}
        id={name}
        haserror={`${!!error}`}
        readOnly={readOnly}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={t(placeholder ?? '')}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
      />
    </InputContainer>
  );
}
