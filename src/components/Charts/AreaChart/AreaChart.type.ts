import { CurveType } from 'recharts/types/shape/Curve';
import { BaseAxisProps } from 'recharts/types/util/types';

export type AreaType = {
  key: number | string;
  type?: CurveType;
  dataKey: string;
  stackId?: string | number;
  stroke?: string;
  fill?: string;
  hide?: boolean;
};

export type AreaChartProps = {
  data: Record<string, unknown>[];
  xAxis?: BaseAxisProps;
  yAxis?: BaseAxisProps;
  areas: AreaType[];
  hideTooltip?: boolean;
};
