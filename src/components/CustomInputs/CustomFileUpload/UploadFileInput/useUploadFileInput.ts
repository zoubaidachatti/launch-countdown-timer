import { FileValueType } from '@/types/interfaces';
import { generateRandomNumber } from '@/utils';
import { isUndefined } from 'lodash';
import { ChangeEvent, DragEvent, MouseEvent, useMemo, useRef, useState } from 'react';

export type UseUploadFileInputType = {
  value: FileValueType;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: (changeValue: FileValueType) => void;
};

const useUploadFileInput = ({ value, readOnly, disabled, onChange }: UseUploadFileInputType) => {
  const disableActions = readOnly || disabled;
  const ref = useRef<HTMLInputElement | null>(null);
  const [key, setKey] = useState(generateRandomNumber());
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const valueExists = useMemo(() => !isUndefined(value) && value !== null, [value]);
  const fileName = useMemo(() => (valueExists ? (value as File).name : undefined), [value]);

  const handleClick = () => {
    ref.current?.click();
  };

  const onDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    setKey(generateRandomNumber());
  };
  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
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
    const file = e.dataTransfer.files?.[0];
    onChange(file);
    setKey(generateRandomNumber());
    onDragLeave(e);
  };

  return {
    disableActions,
    ref,
    key,
    isDraggingOver,
    valueExists,
    fileName,
    handleClick,
    onDelete,
    onUpload,
    onDragLeave,
    onDragOver,
    onDrop,
  };
};

export default useUploadFileInput;
