import { BarChart, CustomCard, LineChart, TypographyOverflow } from '@/components';
import { DashboardStats, TopUsersTable } from '@/features';
import KPICard from '@/features/Dashboard/KPICard/KPICard';
import { useAppSelector } from '@/redux/hooks';
import { Button, ButtonGroup, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Lines,
  barChartData,
  bars,
  expensesArea,
  lineChartData,
  lineChartDataByDay,
  lineChartDataByWeek,
  minCardHeight,
  revenueArea,
  totalProfits,
} from './HomePage.constants';
import { getGreeting } from './HomePage.helpers';

export const HomePage = () => {
  const { t } = useTranslation();
  const [selectedButton, setSelectedButton] = useState('month');
  const data =
    selectedButton === 'month'
      ? lineChartData
      : selectedButton === 'week'
        ? lineChartDataByWeek
        : lineChartDataByDay;
  const theme = useTheme();
  const user = useAppSelector((state) => state.authReducer);
  const greeting = useMemo(() => getGreeting(), []);

  return (
    <Stack spacing={2} direction={'column'}>
      <Stack spacing={1}>
        <Typography variant="h2">{t(greeting)}</Typography>
        <Typography>{t('dashboard.welcome_back', { name: user.firstName })}</Typography>
      </Stack>
      <Stack minHeight={minCardHeight}>
        <DashboardStats />
      </Stack>
      <Grid container>
        <Grid item xs={12} sm={9} paddingBottom={{ xs: 2, sm: 0 }} paddingRight={{ xs: 0, sm: 1 }}>
          <CustomCard>
            <Stack height={(minCardHeight + 20) * 2} width={'100%'} position={'relative'}>
              <Stack
                marginTop={2}
                gap={1}
                direction={{ sm: 'row', xs: 'column-reverse' }}
                alignItems={{ sm: undefined, xs: 'center' }}
                justifyContent={'space-between'}
              >
                <Stack>
                  <TypographyOverflow variant="h3" color={theme.palette.grey[500]} fontWeight={600}>
                    {totalProfits(selectedButton)}
                  </TypographyOverflow>
                  <TypographyOverflow variant="body2" color={'primary.main'} fontWeight={600}>
                    {t('dashboard.total_profits')}
                  </TypographyOverflow>
                </Stack>
                <Stack>
                  <ButtonGroup orientation="horizontal">
                    <Button
                      variant={selectedButton === 'day' ? 'contained' : 'outlined'}
                      onClick={() => setSelectedButton('day')}
                    >
                      {t('dashboard.day')}
                    </Button>
                    <Button
                      variant={selectedButton === 'week' ? 'contained' : 'outlined'}
                      onClick={() => setSelectedButton('week')}
                    >
                      {t('dashboard.week')}
                    </Button>
                    <Button
                      variant={selectedButton === 'month' ? 'contained' : 'outlined'}
                      onClick={() => setSelectedButton('month')}
                    >
                      {t('dashboard.month')}
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
              <Stack
                position={'absolute'}
                height={'80%'}
                width={'calc(100% + 30px)'}
                left={-15}
                bottom={-10}
              >
                <LineChart
                  hideLegend
                  data={data}
                  xAxis={{ dataKey: 'name', hide: true }}
                  yAxis={{ hide: true }}
                  lines={Lines(theme)}
                />
              </Stack>
            </Stack>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={3} paddingLeft={{ xs: 0, sm: 1 }}>
          <Grid item xs={12} paddingBottom={1}>
            <CustomCard>
              <Stack minHeight={minCardHeight} position={'relative'}>
                <KPICard
                  xDataKey={'name'}
                  data={data}
                  label="dashboard.expenses"
                  area={expensesArea(theme)}
                />
              </Stack>
            </CustomCard>
          </Grid>
          <Grid item xs={12} paddingTop={1}>
            <CustomCard>
              <Stack minHeight={minCardHeight} position={'relative'}>
                <KPICard
                  xDataKey={'name'}
                  data={data}
                  label="dashboard.revenue"
                  area={revenueArea(theme)}
                />
              </Stack>
            </CustomCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4} paddingBottom={{ xs: 2, sm: 0 }} paddingRight={{ xs: 0, sm: 2 }}>
          <CustomCard>
            <Stack minHeight={minCardHeight} height={500} width={'100%'}>
              <BarChart
                data={barChartData}
                xAxis={{
                  dataKey: 'subject',
                  hide: true,
                }}
                yAxis={{ hide: true }}
                bars={bars(theme)}
              />
            </Stack>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CustomCard>
            <Stack minHeight={minCardHeight} height={500}>
              <TopUsersTable />
            </Stack>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomePage;
