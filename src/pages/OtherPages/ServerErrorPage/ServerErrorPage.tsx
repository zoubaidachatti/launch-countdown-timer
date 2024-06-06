import { ErrorPageLayout } from '@/layouts';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StyledEmoticon } from './ServerErrorPage.style';

export function ServerErrorPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <ErrorPageLayout>
      <Stack>
        <StyledEmoticon>{t('error.table_flip')}</StyledEmoticon>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Typography textAlign={'center'} variant="h1">
            {t('error.whoops')}
          </Typography>
          <Typography textAlign={'center'} variant="h1">
            {t('error.internal_server_error')}
          </Typography>
          <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
            {t('common.go_back')}
          </Button>
        </Stack>
      </Stack>
    </ErrorPageLayout>
  );
}

export default ServerErrorPage;
