import { CustomCard } from '@/components';
import CustomAlert from '@/components/CustomAlert/CustomAlert';
import { AlertVariants } from '@/types/interfaces';
import { AlertColor, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  AlertSeverities,
  AlertsVariants,
  alertActions,
  alertIcons,
  alerts,
} from './AlertsPage.constants';

export const AlertsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header={'alert.severities'}>
        <Stack spacing={2}>
          {AlertSeverities.map((alertSeverity, index) => (
            <CustomAlert severity={alertSeverity.severity as AlertColor} key={alertSeverity.id}>
              <Typography variant="body1">{t(alerts[index].content)}</Typography>
            </CustomAlert>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header={'alert.variants'}>
        <Stack spacing={3}>
          {AlertsVariants.map((alertVariant) => (
            <Grid container spacing={0.5} key={alertVariant.id}>
              <Grid item xs={12} md={2}>
                <Typography variant="h6">{t(alertVariant.label)}</Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Stack spacing={2}>
                  {AlertSeverities.map((alertSeverity, index) => (
                    <CustomAlert
                      variant={alertVariant.variant as AlertVariants}
                      severity={alertSeverity.severity as AlertColor}
                      key={alertSeverity.id}
                    >
                      <Typography variant="body1">{t(alerts[index].content)}</Typography>
                    </CustomAlert>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header={'alert.alert_icons'}>
        <Stack spacing={3}>
          {alertIcons.map((alertIcon) => (
            <Stack spacing={2.5} key={alertIcon.id}>
              <Typography variant="h6">{t(alertIcon.label)}</Typography>
              <Stack spacing={2}>
                <CustomAlert icon={alertIcon.icon} severity={'warning'}>
                  <Typography variant="body1">{t(alerts[2].content)}</Typography>
                </CustomAlert>
                <CustomAlert icon={alertIcon.icon} severity={'success'} variant="filled">
                  <Typography variant="body1">{t(alerts[0].content)}</Typography>
                </CustomAlert>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="alert.alert_actions">
        <Stack spacing={2}>
          {alertActions.map((alertAction) => (
            <CustomAlert
              key={alertAction.id}
              action={alertAction.action}
              onClose={alertAction.onClose}
              severity={'info'}
            >
              <Typography variant="body1">{t(alerts[1].content)}</Typography>
            </CustomAlert>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header={'alert.alert_titles'}>
        <Stack spacing={2}>
          {AlertSeverities.map((alertSeverity, index) => (
            <CustomAlert
              title={alerts[index].title}
              severity={alertSeverity.severity as AlertColor}
              key={alertSeverity.id}
            >
              <Typography variant="body1">{t(alerts[index].content)}</Typography>
            </CustomAlert>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
};

export default AlertsPage;
