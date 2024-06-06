import { TypographyOverflow } from '@/components';
import { Layout } from '@/config/constants';
import { GeneralInformation, NotificationSettings, ProfileBox, Projects } from '@/features';
import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function ProfilePage() {
  const { t } = useTranslation();
  return (
    <Stack spacing={Layout.pageSpacing}>
      <TypographyOverflow color={'primary.main'} variant="h4" fontWeight={600}>
        {t('profile.account_information')}
      </TypographyOverflow>
      <Grid container>
        <Grid item xs={12} sm={6} paddingRight={{ xs: 0, sm: 1 }}>
          <Stack width={'100%'} direction={'column'} spacing={2}>
            <ProfileBox />
            <Projects />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} paddingLeft={{ xs: 0, sm: 1 }} paddingTop={{ xs: 2, sm: 0 }}>
          <Stack width={'100%'} direction={'column'} spacing={2} justifyContent={'space-between'}>
            <GeneralInformation />
            <NotificationSettings />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ProfilePage;
