import {
  AreaChart,
  BarChart,
  CustomCard,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
} from '@/components';
import { Stack, useTheme } from '@mui/material';
import {
  Areas,
  Bars,
  Cells,
  Data,
  Lines,
  RadarData,
  Radars,
  Scatters,
} from './ChartsPage.constants';

export const ChartsPage = () => {
  const theme = useTheme();

  return (
    <Stack
      gap={1}
      direction={{ md: 'row', sm: 'column' }}
      flexWrap={'wrap'}
      justifyContent={'center'}
    >
      <CustomCard header="chart.line_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300}>
          <LineChart xAxis={{ dataKey: 'name' }} data={Data} lines={Lines(theme)} />
        </Stack>
      </CustomCard>
      <CustomCard header="chart.bar_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300}>
          <BarChart xAxis={{ dataKey: 'name' }} data={Data} bars={Bars(theme)} />
        </Stack>
      </CustomCard>
      <CustomCard header="chart.area_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300}>
          <AreaChart xAxis={{ dataKey: 'name' }} data={Data} areas={Areas(theme)} />
        </Stack>
      </CustomCard>
      <CustomCard header="chart.scatter_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300}>
          <ScatterChart xAxis={{ dataKey: 'name' }} data={Data} scatters={Scatters(theme)} />
        </Stack>
      </CustomCard>
      <CustomCard header="chart.pie_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300} sx={{ userSelect: 'none' }}>
          <PieChart data={Data} dataKey="sales" cells={Cells(theme)} />
        </Stack>
      </CustomCard>
      <CustomCard header="chart.radar_chart">
        <Stack width={{ md: 400, sm: '100%' }} height={300}>
          <RadarChart data={RadarData} dataKey="name" radars={Radars(theme)} />
        </Stack>
      </CustomCard>
    </Stack>
  );
};

export default ChartsPage;
