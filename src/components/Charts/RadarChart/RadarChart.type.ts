export type RadarType = {
  key: number | string;
  name?: string;
  dataKey: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: string | number;
};

export type RadarChartProps = {
  data: Record<string, unknown>[];
  dataKey?: string;
  radars: RadarType[];
};
