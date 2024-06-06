import { FileValueType } from '@/types/interfaces';
import { generateRandomNumber, isNumeric } from '@/utils';
import { isUndefined } from 'lodash';
import { ChangeEvent, DragEvent, useMemo, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

export type useMultipleUploadFileInputType = {
  value: FileValueType;
  readOnly?: boolean;
  disabled?: boolean;
  error?: FieldError;
  maxLength?: number;
  onChange: (changeValue: FileValueType) => void;
};

const useMultipleUploadFileInput = ({
  value,
  disabled,
  readOnly,
  error,
  maxLength,
  onChange,
}: useMultipleUploadFileInputType) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [key, setKey] = useState(generateRandomNumber());
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const valueExists = useMemo(() => !isUndefined(value) && value !== null, [value]);
  const files = valueExists ? (value as File[]) : [];
  const disableActions = readOnly || disabled;
  const errorMsg = error?.message
    ? isNumeric(error.message)
      ? error.type === 'validateType'
        ? 'inputs.errors.invalid_file_type'
        : 'inputs.errors.invalid_file_size'
      : error.message
    : undefined;

  const handleClick = () => {
    ref.current?.click();
  };

  const onDelete = (index: number) => {
    const filteredFiles = files.filter((_, fIndex) => fIndex !== index);
    onChange(filteredFiles);
    setKey(generateRandomNumber());
  };

  const handleChange = (filesList: FileList | null) => {
    if (filesList) {
      if (maxLength && filesList.length + files.length > maxLength) {
        onChange([...files, ...Array.from(filesList)].slice(0, maxLength));
      } else {
        onChange([...files, ...Array.from(filesList)]);
      }
    }
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const filesList = e.target.files ?? null;
    handleChange(filesList);
    setKey(generateRandomNumber());
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const filesList = e.dataTransfer.files ?? null;
    handleChange(filesList);
    setKey(generateRandomNumber());
    onDragLeave(e);
  };

  return {
    disableActions,
    ref,
    key,
    isDraggingOver,
    valueExists,
    files,
    errorMsg,
    handleClick,
    onDelete,
    onUpload,
    onDragLeave,
    onDragOver,
    onDrop,
  };
};

export default useMultipleUploadFileInput;
