import { SelectOption, SelectValueType } from '@/types/interfaces';
import { generateRandomNumber } from '@/utils';
import { isArray, isUndefined } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type UseSelectInputType = {
  value?: SelectValueType;
  isMultiple?: boolean;
  onChange: (change: SelectValueType) => void;
};

const useSelectInput = ({ value, isMultiple, onChange }: UseSelectInputType) => {
  const { t } = useTranslation();
  const selectId = useMemo(() => generateRandomNumber(), []);
  const labelId = useMemo(() => generateRandomNumber(), []);

  const valueExists = !isUndefined(value) && value !== null;

  const selectedOption = valueExists
    ? isMultiple
      ? (value as SelectOption[])
      : (value as SelectOption)
    : undefined;

  const renderValue = isMultiple
    ? valueExists
      ? isArray(selectedOption)
        ? selectedOption.map((so) => t(so.label))
        : ''
      : []
    : valueExists
      ? t((selectedOption as SelectOption)?.label ?? '')
      : '';
  const isOptionSelected = (option: SelectOption) => {
    if (!valueExists) {
      return false;
    }
    if (isArray(selectedOption)) {
      return selectedOption.map((sv) => sv.value).includes(option.value);
    }
    return option.value === selectedOption?.value;
  };

  const onSelect = (newSelectedOption: string | string[]) => {
    // if selector is multiple (i.e., array type), pass an array to onChange
    if (isArray(newSelectedOption)) {
      // 1. if selectedOption already has values,  add to it instead of replacing it
      if (isArray(selectedOption)) {
        const parsedOptionValue = JSON.parse(newSelectedOption[newSelectedOption.length - 1]).value;
        const selectedOptionsValues = selectedOption.map((so) => so.value);
        // 1.1 if value already exists , remove it
        if (selectedOptionsValues.includes(parsedOptionValue)) {
          onChange([...selectedOption.filter((so) => so.value !== parsedOptionValue)]);
        } else {
          // 1.2 otherwise add to array
          onChange([
            ...selectedOption,
            JSON.parse(newSelectedOption[newSelectedOption.length - 1]),
          ]);
          return;
        }
      } else {
        //  2. otherwise create a new array with the selected value
        onChange([JSON.parse(newSelectedOption[0])]);
      }
    }
    // else single select (i.e., object type)
    if (typeof newSelectedOption === 'string') {
      const selectedOptionValue = (selectedOption as SelectOption)?.value;
      const parsedOptionValue = JSON.parse(newSelectedOption).value;
      if (valueExists && selectedOptionValue === parsedOptionValue) {
        onChange(undefined);

        return;
      } else {
        onChange(JSON.parse(newSelectedOption));
      }
    }
  };
  return {
    selectId,
    labelId,
    renderValue,
    t,
    isOptionSelected,
    onSelect,
  };
};

export default useSelectInput;
