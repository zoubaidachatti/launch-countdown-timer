import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CardContentProps } from './CardContent.type';

export function CardContent({ title, content, textAlign, alignItems }: CardContentProps) {
  const { t } = useTranslation();
  return (
    <Stack spacing={2} alignItems={alignItems} overflow={'auto'}>
      <Typography variant="h4">{t(title)}</Typography>
      {typeof content === 'string' ? (
        <Typography variant="body1" textAlign={textAlign}>
          {t(content)}
        </Typography>
      ) : (
        content
      )}
    </Stack>
  );
}
