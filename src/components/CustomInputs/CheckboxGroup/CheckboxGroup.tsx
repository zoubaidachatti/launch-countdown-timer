import { InputContainer, InputLabel } from '@/components';
import { isUndefined } from 'lodash';
import { ChangeEvent } from 'react';
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import { StyledContainer } from './CheckboxGroup.style';
import { CheckboxGroupProps } from './CheckboxGroup.type';

export const CheckboxGroup = ({
  label,
  name,
  tooltip,
  value,
  error,
  options,
  disabledOptions,
  size,
  disabled,
  required,
  readOnly,
  itemsDirection,
  onChange,
}: CheckboxGroupProps) => {
  const valueExists = value && !isUndefined(value) && value !== null;

  const selectedValues = valueExists ? value : [];

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = e.target.value;
    if (
      selectedValues?.includes(`${checkedValue}`) ||
      selectedValues?.includes(Number(checkedValue))
    ) {
      onChange(
        selectedValues?.filter((sv) => sv !== Number(checkedValue) && sv !== `${checkedValue}`),
      );
    } else {
      onChange(selectedValues ? [...selectedValues, checkedValue] : [checkedValue]);
    }
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
            <CheckboxInput
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
                selectedValues?.includes(`${option.value}`) ||
                selectedValues?.includes(Number(option.value))
              }
              onChange={handleCheck}
            />
          );
        })}
      </StyledContainer>
    </InputContainer>
  );
};
