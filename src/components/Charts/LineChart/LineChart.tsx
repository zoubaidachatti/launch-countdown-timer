import { useTheme } from '@mui/material';
import {
  Legend,
  Line,
  LineChart as LineChartRecharts,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { LineChartProps } from './LineChart.type';

export const LineChart = ({ data, layout, xAxis, yAxis, lines, hideLegend }: LineChartProps) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChartRecharts layout={layout} data={data}>
        <XAxis {...xAxis} stroke={theme.palette.grey[500]} />
        <YAxis {...yAxis} stroke={theme.palette.grey[500]} />
        <Tooltip contentStyle={tooltipContentStyle(theme)} />
        {!hideLegend && <Legend />}
        {lines.map((line) => (
          <Line
            key={line.key}
            dataKey={line.dataKey}
            stroke={line.stroke}
            fill={line.fill}
            type={line.type}
          />
        ))}
      </LineChartRecharts>
    </ResponsiveContainer>
  );
};
