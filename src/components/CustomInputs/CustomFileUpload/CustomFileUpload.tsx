import { CustomFileUploadProps } from './CustomFileUpload.type';
import MultipleUploadFileInput from './MultipleUploadFileInput/MultipleUploadFileInput';
import UploadFileInput from './UploadFileInput/UploadFileInput';

export const CustomFileUpload = (props: CustomFileUploadProps) => {
  const { isMultiple } = props;

  if (isMultiple) {
    return <MultipleUploadFileInput {...props} />;
  } else {
    return <UploadFileInput {...props} />;
  }
};
