import RemoveIcon from '@/assets/icons/close.svg?react';
import DocumentIcon from '@/assets/icons/description.svg?react';
import MovieIcon from '@/assets/icons/movie.svg?react';
import AudioIcon from '@/assets/icons/music_note.svg?react';
import UploadIcon from '@/assets/icons/upload.svg?react';
import { CustomImage, InputContainer, InputLabel } from '@/components';
import { FileTypeEnum, InputType } from '@/config/enums';
import { fileToUrl, mimeTypeToFileTypeEnum } from '@/utils';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  DeleteIconContainer,
  PreviewsContainer,
  SVGBox,
  StyledFileName,
  StyledInput,
  imageSx,
} from '../CustomFileUpload.style';
import { CustomFileUploadProps } from '../CustomFileUpload.type';
import useMultipleUploadFileInput from './useMultipleUploadFileInput';
const MultipleUploadFileInput = ({
  label,
  name,
  value,
  acceptTypes,
  tooltip,
  required,
  error,
  readOnly,
  disabled,
  maxLength,
  onChange,
}: CustomFileUploadProps) => {
  const { t } = useTranslation();
  const {
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
  } = useMultipleUploadFileInput({
    value,
    disabled,
    readOnly,
    error,
    maxLength,
    onChange,
  });

  const renderSVG = (file: File) => {
    const fileType = valueExists ? mimeTypeToFileTypeEnum(file.type) : undefined;
    switch (fileType) {
      case FileTypeEnum.Image: {
        const src = fileToUrl(file);
        return <CustomImage alt={file.name} src={src} sx={imageSx} />;
      }
      case FileTypeEnum.Audio:
        return <AudioIcon />;
      case FileTypeEnum.Video:
        return <MovieIcon />;
      case FileTypeEnum.Pdf:
      case FileTypeEnum.File:
      default:
        return <DocumentIcon />;
    }
  };

  return (
    <InputContainer>
      <InputLabel errorMsg={errorMsg} label={label} tooltip={tooltip} required={required} />
      <Stack direction={'row'} gap={'0.5rem'} flexWrap={'wrap'}>
        <Stack spacing={0.5} maxWidth={200}>
          <PreviewsContainer
            justifyContent={'center'}
            alignItems={'center'}
            onClick={disableActions ? undefined : handleClick}
            haserror={`${!!error}`}
            isdragging={`${isDraggingOver}`}
            isreadonly={`${readOnly}`}
            isdisabled={`${disabled || files.length === maxLength}`}
            onDragLeave={disableActions ? undefined : onDragLeave}
            onDragOver={disableActions ? undefined : onDragOver}
            onDrop={disableActions ? undefined : onDrop}
          >
            <StyledInput
              multiple
              ref={ref}
              key={key}
              type={InputType.FILE}
              accept={acceptTypes ? acceptTypes.join(',') : undefined}
              name={name}
              readOnly={readOnly}
              disabled={disabled}
              required={required}
              onChange={disableActions ? undefined : onUpload}
            />
            <SVGBox>
              <UploadIcon />
            </SVGBox>
          </PreviewsContainer>
          {files.length > 0 && (
            <StyledFileName haserror={`${!!error}`}>
              {t('inputs.number_of_files', { number: files.length })}
            </StyledFileName>
          )}
        </Stack>
        {/* map files here */}
        {files.length > 0 &&
          files.map((file, fileIndex) => (
            <Stack key={file.name + fileIndex} spacing={0.5} maxWidth={200}>
              <PreviewsContainer
                justifyContent={'center'}
                alignItems={'center'}
                isreadonly={`${true}`}
                haserror={`${fileIndex.toString() === error?.message}`}
              >
                {renderSVG(file)}
                {!disableActions && (
                  <DeleteIconContainer onClick={() => onDelete(fileIndex)}>
                    <RemoveIcon />
                  </DeleteIconContainer>
                )}
              </PreviewsContainer>
              <StyledFileName
                title={file.name}
                haserror={`${fileIndex.toString() === error?.message}`}
              >
                {file.name}
              </StyledFileName>
            </Stack>
          ))}
      </Stack>
    </InputContainer>
  );
};

export default MultipleUploadFileInput;
