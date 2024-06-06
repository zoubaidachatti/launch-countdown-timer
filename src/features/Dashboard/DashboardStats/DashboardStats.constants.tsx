import CurrencyIcon from '@/assets/icons/currency_exchange.svg?react';
import UsersIcon from '@/assets/icons/group_add.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import ReturnIcon from '@/assets/icons/keyboard_return.svg?react';

export const Stats = [
  {
    id: 1,
    icon: <CurrencyIcon />,
    label: 'dashboard.total_sales',
    selected: true,
    KPIs: {
      amount: '$566,568.567',
      percentage: 50,
      week: '18.67K',
      isNegative: false,
    },
  },
  {
    id: 2,
    icon: <UsersIcon />,
    label: 'dashboard.visitors',
    KPIs: {
      amount: '780,678',
      percentage: 13.6,
      week: '3.5K',
      isNegative: false,
    },
  },
  {
    id: 3,
    icon: <StarIcon />,
    label: 'dashboard.total_orders',
    KPIs: {
      amount: '2,490.55',
      percentage: 30,
      week: '25K',
      isNegative: false,
    },
  },
  {
    id: 4,
    icon: <ReturnIcon />,
    label: 'dashboard.refunded',
    KPIs: {
      amount: '908,56',
      percentage: 9.4,
      week: '66',
      isNegative: true,
    },
  },
];
