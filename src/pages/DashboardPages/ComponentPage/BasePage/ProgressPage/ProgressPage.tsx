import { CustomCard, CustomLinearProgress } from '@/components';
import { LinearProgressVariant, PaletteVariants, SizeType } from '@/types/interfaces';
import { Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { progressColors, progressSizes, progressVariants } from './ProgressPage.constants';

export function ProgressPage() {
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header="progress.basic_linear_progress">
        <Stack spacing={2}>
          <Stack width={'100%'} spacing={1.5}>
            <CustomLinearProgress value={20} />
            <CustomLinearProgress value={50} />
            <CustomLinearProgress value={80} labeled />
          </Stack>
          <Stack width={'100%'} spacing={1.5}>
            {progressColors.map(({ label, id, color, value }) => (
              <Grid key={id} container spacing={0.5} alignItems={'center'}>
                <Grid item xs={12} sm={3} md={2}>
                  <Typography color={`${color}.main`}>{t(label)}</Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                  <CustomLinearProgress color={color as PaletteVariants} value={value} />
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header="progress.progress_sizes">
        <Stack width={'100%'} spacing={1.5}>
          {progressSizes.map(({ label, id, size, value }) => (
            <Grid key={id} container spacing={0.5} alignItems={'center'}>
              <Grid item xs={12} sm={3} md={2}>
                <Typography>{t(label)}</Typography>
              </Grid>
              <Grid item xs={12} sm={9} md={10}>
                <CustomLinearProgress size={size as SizeType} value={value} />
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="progress.progress_variants">
        <Stack width={'100%'} spacing={1.5}>
          {progressVariants.map(({ label, id, variant, valueBuffer, value }) => (
            <Grid key={id} container spacing={0.5} alignItems={'center'}>
              <Grid item xs={12} sm={3} md={2}>
                <Typography>{t(label)}</Typography>
              </Grid>
              <Grid item xs={12} sm={9} md={10}>
                <CustomLinearProgress
                  variant={variant as LinearProgressVariant}
                  value={value}
                  valueBuffer={valueBuffer}
                />
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
}

export default ProgressPage;
