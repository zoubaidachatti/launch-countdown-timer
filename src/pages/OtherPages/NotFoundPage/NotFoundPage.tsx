import { RouterPaths } from '@/config/constants/router.config';
import { ErrorPageLayout } from '@/layouts';
import { Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StyledEmoticon } from './NotFoundPage.style';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToHomePage = () => {
    navigate(RouterPaths.DashboardPaths.homePath);
  };
  return (
    <ErrorPageLayout>
      <Stack>
        <StyledEmoticon>{t('error.lost')}</StyledEmoticon>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Typography variant="h1">{t('error.page_not_found')}</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="primary" onClick={goToHomePage}>
              {t('common.homepage')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ textWrap: 'nowrap' }}
              onClick={() => navigate(-1)}
            >
              {t('common.go_back')}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </ErrorPageLayout>
  );
}

export default NotFoundPage;
