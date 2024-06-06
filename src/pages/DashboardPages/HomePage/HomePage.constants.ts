import { AreaType } from '@/components/Charts/AreaChart/AreaChart.type';
import { BarType } from '@/components/Charts/BarChart/BarChart.type';
import { LineType } from '@/components/Charts/LineChart/LineChart.type';
import { Layout } from '@/config/constants';
import { Theme, alpha } from '@mui/material';

export const minCardHeight = 110;

export const lineChartData = [
  {
    name: 'January',
    revenue: 7000,
    expenses: 5000,
    profit: 2000,
  },
  {
    name: 'February',
    revenue: 8000,
    expenses: 7000,
    profit: 1000,
  },
  {
    name: 'March',
    revenue: 6500,
    expenses: 6000,
    profit: 500,
  },
  {
    name: 'April',
    revenue: 7200,
    expenses: 4800,
    profit: 2400,
  },
  {
    name: 'May',
    revenue: 6800,
    expenses: 5400,
    profit: 1400,
  },
  {
    name: 'June',
    revenue: 7500,
    expenses: 5200,
    profit: 2300,
  },
  {
    name: 'July',
    revenue: 7900,
    expenses: 6100,
    profit: 1800,
  },
  {
    name: 'August',
    revenue: 7200,
    expenses: 5800,
    profit: 1400,
  },
  {
    name: 'September',
    revenue: 8100,
    expenses: 6200,
    profit: 1900,
  },
  {
    name: 'October',
    revenue: 6700,
    expenses: 5300,
    profit: 1400,
  },
  {
    name: 'November',
    revenue: 8300,
    expenses: 6400,
    profit: 1900,
  },
  {
    name: 'December',
    revenue: 7600,
    expenses: 5500,
    profit: 2100,
  },
];

export const lineChartDataByDay = [
  { name: 'Monday', revenue: 500, expenses: 300, profit: 200 },
  { name: 'Tuesday', revenue: 600, expenses: 400, profit: 340 },
  { name: 'Wednesday', revenue: 550, expenses: 350, profit: 200 },
  { name: 'Thursday', revenue: 700, expenses: 500, profit: 200 },
  { name: 'Friday', revenue: 650, expenses: 450, profit: 904 },
  { name: 'Saturday', revenue: 800, expenses: 600, profit: 200 },
  { name: 'Sunday', revenue: 750, expenses: 550, profit: 89 },
];

export const lineChartDataByWeek = [
  { name: 'Week 1', revenue: 3500, expenses: 1200, profit: 1000 },
  { name: 'Week 2', revenue: 2000, expenses: 1059, profit: 3000 },
  { name: 'Week 3', revenue: 4200, expenses: 700, profit: 1200 },
  { name: 'Week 4', revenue: 9800, expenses: 3000, profit: 1090 },
];

export const totalProfits = (groupBy: string) =>
  groupBy === 'month' ? '$20,100.00' : groupBy === 'week' ? '$4,100.00' : '$1,400.00';

export const expensesArea = (theme: Theme): AreaType => ({
  key: 9,
  dataKey: 'expenses',
  stroke: theme.palette.primary.main,
  fill: theme.palette.primary.light,
  type: 'monotone',
});

export const revenueArea = (theme: Theme): AreaType => ({
  key: 9,
  dataKey: 'revenue',
  stroke: theme.palette.primary.main,
  fill: theme.palette.primary.light,
  type: 'monotone',
});

export const Lines = (theme: Theme): LineType[] => [
  {
    key: 56,
    dataKey: 'revenue',
    type: 'monotone',
    stroke: theme.palette.secondary.main,
  },
  {
    key: 89,
    dataKey: 'expenses',
    type: 'monotone',
    stroke: theme.palette.primary.main,
  },
  {
    key: 67,
    dataKey: 'profit',
    type: 'monotone',
    stroke: theme.palette.primary.light,
  },
];

export const barChartData = [
  {
    subject: 'subject A',
    quality: 85,
    durability: 90,
    price: 70,
    availability: 95,
    brandValue: 80,
  },
  {
    subject: 'subject B',
    quality: 75,
    durability: 85,
    price: 80,
    availability: 80,
    brandValue: 85,
  },
  {
    subject: 'subject C',
    quality: 90,
    durability: 75,
    price: 85,
    availability: 90,
    brandValue: 95,
  },
  {
    subject: 'subject D',
    quality: 80,
    durability: 70,
    price: 90,
    availability: 85,
    brandValue: 75,
  },
  {
    subject: 'subject E',
    quality: 95,
    durability: 95,
    price: 60,
    availability: 100,
    brandValue: 90,
  },
];

export const bars = (theme: Theme): BarType[] => [
  {
    dataKey: 'quality',
    key: 52,
    fill: alpha(theme.palette.secondary.main, 0.5),
    stroke: theme.palette.secondary.dark,
    radius: [Layout.borderRadius, Layout.borderRadius, 0, 0],
  },
  {
    dataKey: 'price',
    key: 49,
    fill: alpha(theme.palette.primary.main, 0.5),
    stroke: theme.palette.primary.dark,
    radius: [Layout.borderRadius, Layout.borderRadius, 0, 0],
  },
];
