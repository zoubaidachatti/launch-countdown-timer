import CalendarIcon from '@/assets/icons/calendar_month.svg?react';
import { InputContainer, InputLabel } from '@/components';
import i18nInstance from '@/locales/i18nInstance';
import { DateValueType } from '@/types/interfaces';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledDatePicker } from './DateInput.style';
import { DateInputProps } from './DateInput.type';

export const DateInput = ({
  label,
  name,
  value,
  disabled,
  readOnly,
  error,
  placeholder,
  required,
  textAlign,
  tooltip,
  onChange,
}: DateInputProps) => {
  const locale = i18nInstance.language;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <InputContainer>
        <InputLabel
          errorMsg={error?.message}
          label={label}
          tooltip={tooltip}
          name={name}
          required={required}
        />
        <StyledDatePicker
          value={value ? (value as DateValueType) : null}
          slots={{
            openPickerIcon: CalendarIcon,
          }}
          name={name}
          disabled={disabled}
          onChange={onChange}
          textalign={textAlign}
          format={placeholder}
          readOnly={readOnly}
          slotProps={{
            textField: {
              placeholder: placeholder,
              error: !!error,
              required,
              inputProps: {
                id: name,
              },
            },
          }}
        />
      </InputContainer>
    </LocalizationProvider>
  );
};
