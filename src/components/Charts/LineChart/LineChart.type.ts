import { CurveType } from 'recharts/types/shape/Curve';
import { BaseAxisProps, LayoutType } from 'recharts/types/util/types';

export type LineType = {
  key: number | string;
  dataKey: string;
  type?: CurveType;
  stroke?: string;
  fill?: string;
};

export type LineChartProps = {
  layout?: LayoutType;
  data: Record<string, unknown>[];
  hideLegend?: boolean;
  xAxis?: BaseAxisProps;
  yAxis?: BaseAxisProps;
  lines: LineType[];
};
