import { useTheme } from '@mui/material';
import {
  ResponsiveContainer,
  Scatter,
  ScatterChart as ScatterChartRecharts,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { ScatterChartProps } from './ScatterChart.type';

export const ScatterChart = ({ data, xAxis, yAxis, scatters }: ScatterChartProps) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={'100%'}>
      <ScatterChartRecharts data={data}>
        <XAxis {...xAxis} stroke={theme.palette.grey[500]} />
        <YAxis {...yAxis} stroke={theme.palette.grey[500]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={tooltipContentStyle(theme)} />
        {scatters.map((scatter) => (
          <Scatter
            key={scatter.key}
            name={scatter.name}
            dataKey={scatter.dataKey}
            fill={scatter.fill}
            stroke={scatter.stroke}
            strokeOpacity={scatter.strokeOpacity}
          />
        ))}
      </ScatterChartRecharts>
    </ResponsiveContainer>
  );
};
