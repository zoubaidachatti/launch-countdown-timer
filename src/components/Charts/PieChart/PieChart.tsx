import { useTheme } from '@mui/material';
import {
  Cell,
  Legend,
  Pie,
  PieChart as PieChartRecharts,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { tooltipContentStyle } from '../Charts.style';
import { PieChartProps } from './PieChart.type';

export const PieChart = ({ data, dataKey, cells, stroke }: PieChartProps) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChartRecharts margin={{ top: 20 }}>
        <Pie dataKey={dataKey} data={data} stroke={stroke} label>
          {cells.map((cell) => (
            <Cell key={cell.key} stroke={cell.stroke} fill={cell.fill} pointerEvents={'none'} />
          ))}
        </Pie>
        <Legend />
        <Tooltip contentStyle={tooltipContentStyle(theme)} />
      </PieChartRecharts>
    </ResponsiveContainer>
  );
};
