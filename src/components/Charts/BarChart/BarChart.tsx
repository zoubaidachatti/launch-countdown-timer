import { useTheme } from '@mui/material';
import {
  Bar,
  BarChart as BarChartRecharts,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { BarChartProps } from './BarChart.type';

export const BarChart = ({ data, bars, xAxis, yAxis, hideLegend }: BarChartProps) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartRecharts data={data}>
        <XAxis {...xAxis} stroke={theme.palette.grey[500]} />
        <YAxis {...yAxis} stroke={theme.palette.grey[500]} />
        <Tooltip contentStyle={tooltipContentStyle(theme)} />
        {!hideLegend && <Legend />}
        {bars.map((bar) => (
          <Bar
            key={bar.key}
            dataKey={bar.dataKey}
            stackId={bar.stackId}
            fill={bar.fill}
            stroke={bar.stroke}
            fillOpacity={bar.fillOpacity}
            radius={bar.radius}
          />
        ))}
      </BarChartRecharts>
    </ResponsiveContainer>
  );
};
