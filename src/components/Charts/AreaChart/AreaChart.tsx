import { useTheme } from '@mui/material';
import {
  Area,
  AreaChart as AreaChartRecharts,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { AreaChartProps } from './AreaChart.type';

export const AreaChart = ({ data, xAxis, yAxis, areas, hideTooltip }: AreaChartProps) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChartRecharts data={data}>
        <XAxis {...xAxis} stroke={theme.palette.grey[500]} />
        <YAxis {...yAxis} stroke={theme.palette.grey[500]} />
        {!hideTooltip && <Tooltip contentStyle={tooltipContentStyle(theme)} />}
        {areas.map((area) => (
          <Area
            key={area.key}
            type={area.type}
            dataKey={area.dataKey}
            stackId={area.stackId}
            stroke={area.stroke}
            fill={area.fill}
            hide={area.hide}
          />
        ))}
      </AreaChartRecharts>
    </ResponsiveContainer>
  );
};
