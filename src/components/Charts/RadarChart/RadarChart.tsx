import { useTheme } from '@mui/material';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RadarChartRecharts,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { RadarChartProps } from './RadarChart.type';

export const RadarChart = ({ data, dataKey, radars }: RadarChartProps) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChartRecharts data={data}>
        <PolarGrid stroke={theme.palette.grey[500]} />
        <PolarAngleAxis dataKey={dataKey} stroke={theme.palette.grey[500]} />
        <Tooltip contentStyle={tooltipContentStyle(theme)} />
        {radars.map((radar) => (
          <Radar
            key={radar.key}
            name={radar.name}
            dataKey={radar.dataKey}
            stroke={radar.stroke}
            fill={radar.fill}
            fillOpacity={radar.fillOpacity}
          />
        ))}
        <Legend />
      </RadarChartRecharts>
    </ResponsiveContainer>
  );
};
