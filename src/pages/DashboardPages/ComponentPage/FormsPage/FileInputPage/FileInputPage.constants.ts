import StarryNightImagePath from '@/assets/images/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg';
import DummyImagePath from '@/assets/images/dummy-image-green-e1398449160839.jpg';
import { InputType } from '@/config/enums';
import i18nInstance from '@/locales/i18nInstance';
import { InputConfig } from '@/types/interfaces';
import { createFileFromImagePath } from '@/utils';
import { isFileSizeValid, validateFileType } from '@/utils/validators';

const acceptTypes = ['.jpeg', '.png', '.pdf', '.mp4', '.webm'];

const dummyImage = await createFileFromImagePath(DummyImagePath).then((result) => result);
const StarryNightImage = await createFileFromImagePath(StarryNightImagePath).then(
  (result) => result,
);

const fileLabel = 'inputs.file_input';

export const FileInputsConfig: Record<string, InputConfig> = {
  fileInput: {
    label: fileLabel,
    fieldName: 'fileInput',
    defaultValue: null,
    inputType: InputType.FILE,
  },
  document: {
    label: 'inputs.document',
    fieldName: 'document',
    tooltip: 'inputs.tooltip.document_upload',
    defaultValue: null,
    inputType: InputType.FILE,
  },
  fileInputRequired: {
    label: fileLabel,
    fieldName: 'fileInputRequired',
    defaultValue: null,
    inputType: InputType.FILE,
    acceptTypes: acceptTypes,
    tooltip: 'inputs.tooltip.this_file_is_required',
    config: {
      required: { message: 'inputs.errors.file_required', value: true },
    },
  },
  fileInputRestricted: {
    label: fileLabel,
    fieldName: 'fileInputRestricted',
    defaultValue: null,
    inputType: InputType.FILE,
    acceptTypes: acceptTypes,
    tooltip: i18nInstance.t('inputs.tooltip.file_size_and_accept_types', {
      size: 10,
      types: acceptTypes.join(' , '),
    }),
    config: {
      required: { message: 'inputs.errors.file_required', value: true },
      validate: {
        validateType: (value: File) =>
          validateFileType(value, acceptTypes) || 'inputs.errors.invalid_file_type',
        validateSize: (value) =>
          isFileSizeValid(value, 10000000) || 'inputs.errors.invalid_file_size',
      },
    },
  },
  fileInputDisabled: {
    label: 'inputs.file_input_disabled',
    fieldName: 'fileInputDisabled',
    tooltip: 'inputs.tooltip.file_disabled',
    defaultValue: null,
    inputType: InputType.FILE,
    disabled: true,
  },
  fileInputReadOnly: {
    label: 'inputs.file_input_readonly',
    fieldName: 'fileInputReadOnly',
    tooltip: 'inputs.tooltip.file_readonly',
    defaultValue: null,
    inputType: InputType.FILE,
    readOnly: true,
  },
  fileInputReadOnlyWithDefaultValue: {
    label: 'inputs.file_input_readonly',
    fieldName: 'fileInputReadOnlyWithDefaultValue',
    tooltip: 'inputs.tooltip.file_readonly_with_default_value',
    defaultValue: dummyImage,
    inputType: InputType.FILE,
    readOnly: true,
  },
  multipleFiles: {
    label: 'inputs.multiple_files',
    fieldName: 'multipleFiles',
    tooltip: 'inputs.tooltip.upload_multiple_files_here',
    inputType: InputType.FILE,
    multiple: true,
  },
  multipleFilesDisabled: {
    label: 'inputs.multiple_files_disabled',
    fieldName: 'multipleFilesDisabled',
    inputType: InputType.FILE,
    multiple: true,
    disabled: true,
  },
  multipleFilesReadOnly: {
    label: 'inputs.multiple_files_read_only',
    fieldName: 'multipleFilesReadOnly',
    inputType: InputType.FILE,
    multiple: true,
    readOnly: true,
  },
  multipleFilesReadOnlyWithDefaultValue: {
    label: 'inputs.multiple_files_read_only_with_default_value',
    fieldName: 'multipleFilesReadOnlyWithDefaultValue',
    inputType: InputType.FILE,
    multiple: true,
    readOnly: true,
    defaultValue: [StarryNightImage, dummyImage],
  },
  multipleFilesWithValidation: {
    label: 'inputs.files_validation',
    fieldName: 'multipleFilesWithValidation',
    defaultValue: null,
    multiple: true,
    inputType: InputType.FILE,
    acceptTypes: acceptTypes,
    tooltip: i18nInstance.t('inputs.tooltip.file_size_and_accept_types', {
      size: 10,
      types: acceptTypes.join(' , '),
    }),
    config: {
      required: { value: true, message: 'inputs.errors.must_upload_at_least_one_file' },
      validate: {
        validateType: (values: File[]) => {
          let falseIndex: number | undefined = undefined;
          values?.every((value, index) => {
            if (validateFileType(value, acceptTypes)) {
              return true;
            } else {
              falseIndex = index;
            }
          });
          return values?.every((value) => validateFileType(value, acceptTypes)) || `${falseIndex}`;
        },
        validateSize: (values: File[]) => {
          let falseIndex: number | undefined = undefined;
          values?.every((value, index) => {
            if (isFileSizeValid(value, 10000000)) {
              return true;
            } else {
              falseIndex = index;
            }
          });
          return values?.every((value) => isFileSizeValid(value, 10000000)) || `${falseIndex}`;
        },
      },
    },
  },
};
