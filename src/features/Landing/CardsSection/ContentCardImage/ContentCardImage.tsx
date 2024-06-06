import { Typography } from '@mui/material';
import { RootStyle } from './ContentCardImage.style';
import { useTranslation } from 'react-i18next';

const ContentCardImage = ({
  src,
  title,
  content,
  blueContent,
}: {
  src: string;
  title: string;
  content: string;
  blueContent?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <RootStyle
      alignItems={'flex-start'}
      justifyContent={'end'}
      width="100%"
      height={'100%'}
      bgcolor={'grey.50'}
      p={4.5}
      src={src}
    >
      <Typography textAlign="left" marginBottom={'1.5rem'} color="info.main" variant="h3">
        {t(title)}
      </Typography>
      <Typography
        textAlign="left"
        marginBottom={'2rem'}
        color={blueContent ? 'info.main' : 'success.main'}
        variant="body2"
      >
        {t(content)}
      </Typography>
    </RootStyle>
  );
};

export default ContentCardImage;
