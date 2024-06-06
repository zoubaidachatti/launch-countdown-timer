export type PieChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  stroke?: string;
  cells: { key: number | string; stroke?: string; fill?: string }[];
};
