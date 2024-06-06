import { ReactNode } from 'react';

export type StatisticCardProps = {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  KPIs: {
    amount: number | string;
    percentage: number | string;
    week: number | string;
    isNegative: boolean;
  };
  onClick: () => void;
};
