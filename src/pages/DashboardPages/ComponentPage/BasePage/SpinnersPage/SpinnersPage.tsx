import { CustomCard } from '@/components';
import { PaletteVariants, SpinnerVariants } from '@/types/interfaces';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DeterminateSpinnerValues,
  SpinnerColors,
  SpinnerSizes,
  SpinnersVariants,
} from './SpinnersPage.constants';
import { GlobalVariables } from '@/config/constants';

export const SpinnersPage = () => {
  const { t } = useTranslation();
  const [spinValue, setSpinValue] = useState(10);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setSpinValue((prev) => (prev === 100 ? 10 : prev + 10));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <CustomCard header="spinner.basic_spinners">
        <Stack spacing={2}>
          {SpinnerColors.map((spinnerColor) => (
            <Grid key={spinnerColor.id} container spacing={0.5}>
              <Grid item xs={6} sm={2}>
                {t(spinnerColor.label)}
              </Grid>
              <Grid item xs={6} sm={10}>
                <CircularProgress color={spinnerColor.color as PaletteVariants} />
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="spinner.spinner_sizes">
        <Stack spacing={2}>
          {SpinnerSizes.map((spinnerSize) => (
            <Grid key={spinnerSize.id} container spacing={0.5}>
              <Grid item xs={12} md={3}>
                {t(spinnerSize.label)}
              </Grid>
              <Grid item xs={12} md={9}>
                <Stack gap={0.75} flexWrap={'wrap'} direction="row">
                  {SpinnerColors.map((spinnerColor) => (
                    <CircularProgress
                      key={spinnerColor.id}
                      size={spinnerSize.size}
                      color={spinnerColor.color as PaletteVariants}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="spinner.spinner_variants">
        <Stack spacing={2}>
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={3}>
              {t(SpinnersVariants[0].label)}
            </Grid>
            <Grid item xs={12} md={9}>
              <CircularProgress
                variant={SpinnersVariants[0].variant as SpinnerVariants}
                color={'primary'}
              />
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={3}>
              {t(SpinnersVariants[1].label)}
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack gap={0.75} flexWrap={'wrap'} direction="row">
                {DeterminateSpinnerValues.map((spinnerValue) => (
                  <Stack
                    key={spinnerValue.id}
                    alignItems={'center'}
                    spacing={0.75}
                    direction={'column'}
                  >
                    <CircularProgress
                      variant={SpinnersVariants[1].variant as SpinnerVariants}
                      color={spinnerValue.color as PaletteVariants}
                      value={spinnerValue.value ?? spinValue}
                    />
                    <Typography color={`${spinnerValue.color}.main`} fontWeight={600}>
                      {`${spinnerValue.value ?? spinValue}${GlobalVariables.percentage}`}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </CustomCard>
    </>
  );
};

export default SpinnersPage;
