import { InputContainer, InputLabel } from '@/components';
import { GlobalVariables } from '@/config/constants';
import { isUndefined } from 'lodash';
import { ChangeEvent } from 'react';
import RadioInput from '../RadioInput/RadioInput';
import { StyledContainer } from './RadioGroup.style';
import { RadioGroupProps } from './RadioGroup.type';

export const RadioGroup = ({
  label,
  name,
  tooltip,
  value,
  error,
  options,
  disabledOptions,
  itemsDirection,
  size,
  required,
  readOnly,
  disabled,
  onChange,
}: RadioGroupProps) => {
  const valueExists =
    value && !isUndefined(value) && value !== null && value !== GlobalVariables.emptyString;

  const selectedValues = valueExists ? value : undefined;

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      <InputLabel errorMsg={error?.message} label={label} tooltip={tooltip} required={required} />
      <StyledContainer
        gap={0.5}
        direction={itemsDirection}
        flexWrap={'wrap'}
        isdisabled={`${disabled}`}
        isreadonly={`${readOnly}`}
      >
        {options?.map((option) => {
          return (
            <RadioInput
              key={option.label}
              label={option.label}
              name={name}
              size={size}
              readOnly={readOnly}
              required={required}
              disabled={
                disabledOptions?.includes(`${option.value}`) ||
                disabledOptions?.includes(Number(option.value)) ||
                disabled
              }
              value={option.value}
              checked={
                selectedValues === `${option.value}` || selectedValues === Number(option.value)
              }
              onChange={handleCheck}
            />
          );
        })}
      </StyledContainer>
    </InputContainer>
  );
};
