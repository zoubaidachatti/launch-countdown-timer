import { StyledImage } from './CustomImage.style';
import { CustomImageProps } from './CustomImage.type';

export const CustomImage = ({ src, alt, sx }: CustomImageProps) => {
  return <StyledImage src={src} alt={alt} sx={sx} />;
};
