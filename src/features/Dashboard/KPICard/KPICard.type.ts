import { AreaType } from '@/components/Charts/AreaChart/AreaChart.type';

export type KPICardProps = {
  data: Record<string, unknown>[];
  area: AreaType;
  label: string;
  xDataKey: string;
};
