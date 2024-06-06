import { BaseAxisProps } from 'recharts/types/util/types';

export type BarType = {
  key: number | string;
  dataKey: string;
  stackId?: string | number;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
  radius?: number | [number, number, number, number];
};

export type BarChartProps = {
  data: Record<string, unknown>[];
  xAxis?: BaseAxisProps;
  yAxis?: BaseAxisProps;
  bars: BarType[];
  hideLegend?: boolean;
};
