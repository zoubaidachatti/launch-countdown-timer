import { BaseAxisProps } from 'recharts/types/util/types';

export type ScatterType = {
  key: number | string;
  name?: string;
  dataKey: string;
  stroke?: string;
  fill?: string;
  strokeOpacity?: string | number;
};

export type ScatterChartProps = {
  data: Record<string, unknown>[];
  xAxis?: BaseAxisProps;
  yAxis?: BaseAxisProps;
  scatters: ScatterType[];
};
