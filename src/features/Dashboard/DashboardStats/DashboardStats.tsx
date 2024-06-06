import { useState } from 'react';
import { Stats } from './DashboardStats.constants';
import { RootStyle } from './DashboardStats.style';
import { StatisticCard } from '../StatisticCard/StatisticCard';

export function DashboardStats() {
  const [stats, setStats] = useState(Stats);

  const onClickCard = (id: number) => {
    setStats((prev) => prev.map((stat) => ({ ...stat, selected: stat.id === id })));
  };

  return (
    <RootStyle direction={{ xs: 'column', sm: 'row' }}>
      {stats.map((stat) => (
        <StatisticCard key={stat.id} {...stat} onClick={() => onClickCard(stat.id)} />
      ))}
    </RootStyle>
  );
}
