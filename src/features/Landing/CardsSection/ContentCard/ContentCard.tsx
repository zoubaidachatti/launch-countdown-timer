import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledLink } from './ContentCard.style';

const ContentCard = ({
  title,
  content,
  isFirst,
}: {
  title: string;
  content: string;
  isFirst?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Stack
      alignItems={'flex-start'}
      justifyContent={'center'}
      width="100%"
      height={'100%'}
      bgcolor={'grey.50'}
      p={4.5}
    >
      <Typography textAlign="left" marginBottom={'1.5rem'} color="info.dark" variant="h2">
        {t(title)}
      </Typography>
      <Typography textAlign="left" marginBottom={'2rem'} color="info.dark" variant="subtitle1">
        {t(content)}
      </Typography>
      <StyledLink first={`${isFirst}`}>{t('content.learn_more')}</StyledLink>
    </Stack>
  );
};

export default ContentCard;
