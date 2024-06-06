import RemoveIcon from '@/assets/icons/close.svg?react';
import DocumentIcon from '@/assets/icons/description.svg?react';
import MovieIcon from '@/assets/icons/movie.svg?react';
import AudioIcon from '@/assets/icons/music_note.svg?react';
import UploadIcon from '@/assets/icons/upload.svg?react';
import { CustomImage, InputContainer, InputLabel } from '@/components';
import { FileTypeEnum, InputType } from '@/config/enums';
import { fileToUrl, mimeTypeToFileTypeEnum } from '@/utils';
import {
  DeleteIconContainer,
  PreviewsContainer,
  SVGBox,
  StyledFileName,
  StyledInput,
  imageSx,
} from '../CustomFileUpload.style';
import { CustomFileUploadProps } from '../CustomFileUpload.type';
import useUploadFileInput from './useUploadFileInput';

export default function UploadFileInput({
  label,
  tooltip,
  value,
  required,
  disabled,
  error,
  name,
  readOnly,
  acceptTypes,
  onChange,
}: CustomFileUploadProps) {
  const {
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
  } = useUploadFileInput({ value, readOnly, disabled, onChange });

  const renderSVG = () => {
    const fileType = valueExists ? mimeTypeToFileTypeEnum((value as File).type) : undefined;
    switch (fileType) {
      case FileTypeEnum.Image: {
        const src = fileToUrl(value as File);
        return <CustomImage alt={(value as File).name} src={src} sx={imageSx} />;
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
      <InputLabel errorMsg={error?.message} label={label} tooltip={tooltip} required={required} />
      <PreviewsContainer
        justifyContent={'center'}
        alignItems={'center'}
        onClick={disableActions ? undefined : handleClick}
        haserror={`${!!error}`}
        isdragging={`${isDraggingOver}`}
        isreadonly={`${readOnly}`}
        isdisabled={`${disabled}`}
        onDragLeave={disableActions ? undefined : onDragLeave}
        onDragOver={disableActions ? undefined : onDragOver}
        onDrop={disableActions ? undefined : onDrop}
      >
        <StyledInput
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
        {valueExists && !disableActions && (
          <DeleteIconContainer onClick={(e) => onDelete(e)}>
            <RemoveIcon />
          </DeleteIconContainer>
        )}
        <SVGBox> {valueExists ? renderSVG() : <UploadIcon />}</SVGBox>
      </PreviewsContainer>
      {valueExists && (
        <StyledFileName title={fileName} haserror={`${!!error}`}>
          {fileName}
        </StyledFileName>
      )}
    </InputContainer>
  );
}
