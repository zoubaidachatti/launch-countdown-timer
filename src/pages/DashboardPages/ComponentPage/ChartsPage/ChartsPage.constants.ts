import { AreaType } from '@/components/Charts/AreaChart/AreaChart.type';
import { BarType } from '@/components/Charts/BarChart/BarChart.type';
import { LineType } from '@/components/Charts/LineChart/LineChart.type';
import { ScatterType } from '@/components/Charts/ScatterChart/ScatterChart.type';
import { Theme, alpha } from '@mui/material';

export const Data = [
  {
    name: 'January',
    sales: 450,
    expenses: 300,
  },
  {
    name: 'February',
    sales: 600,
    expenses: 400,
  },
  {
    name: 'March',
    sales: 800,
    expenses: 500,
  },
  {
    name: 'April',
    sales: 700,
    expenses: 550,
  },
  {
    name: 'May',
    sales: 900,
    expenses: 600,
  },
  {
    name: 'June',
    sales: 1000,
    expenses: 700,
  },
  {
    name: 'July',
    sales: 1200,
    expenses: 800,
  },
  {
    name: 'August',
    sales: 1100,
    expenses: 750,
  },
  {
    name: 'September',
    sales: 1000,
    expenses: 700,
  },
  {
    name: 'October',
    sales: 950,
    expenses: 650,
  },
  {
    name: 'November',
    sales: 800,
    expenses: 600,
  },
  {
    name: 'December',
    sales: 700,
    expenses: 550,
  },
];

export const Lines = (theme: Theme): LineType[] => [
  { key: 23, type: 'monotone', dataKey: 'sales', stroke: theme.palette.primary.main },
  { key: 67, type: 'monotone', dataKey: 'expenses', stroke: theme.palette.secondary.main },
];

export const Bars = (theme: Theme): BarType[] => [
  { key: 253, dataKey: 'sales', fill: theme.palette.primary.main, stackId: 1 },
  { key: 675, dataKey: 'expenses', fill: theme.palette.secondary.main, stackId: 1 },
];

export const Areas = (theme: Theme): AreaType[] => [
  {
    key: 243,
    type: 'monotone',
    dataKey: 'sales',
    stroke: theme.palette.primary.main,
    fill: theme.palette.primary.light,
  },
  {
    key: 627,
    type: 'monotone',
    dataKey: 'expenses',
    stroke: theme.palette.secondary.main,
    fill: theme.palette.secondary.light,
  },
];

export const Scatters = (theme: Theme): ScatterType[] => [
  {
    key: 12,
    name: 'sales',
    dataKey: 'sales',
    stroke: theme.palette.primary.main,
    fill: theme.palette.primary.light,
    strokeOpacity: 0.4,
  },
  {
    key: 24,
    name: 'expenses',
    dataKey: 'expenses',
    stroke: theme.palette.secondary.main,
    fill: theme.palette.secondary.light,
    strokeOpacity: 0.4,
  },
];

export const Cells = (theme: Theme) => [
  { key: 1, fill: theme.palette.primary.main },
  { key: 2, fill: theme.palette.primary.light },
  { key: 3, fill: theme.palette.primary.dark },
  { key: 4, fill: theme.palette.secondary.main },
  { key: 5, fill: theme.palette.secondary.light },
  { key: 6, fill: theme.palette.secondary.dark },
  { key: 7, fill: alpha(theme.palette.secondary.main, 0.9) },
  { key: 8, fill: alpha(theme.palette.primary.dark, 0.5) },
  { key: 9, fill: alpha(theme.palette.primary.dark, 0.9) },
  { key: 10, fill: alpha(theme.palette.secondary.light, 0.9) },
  { key: 11, fill: alpha(theme.palette.primary.dark, 0.3) },
  { key: 12, fill: alpha(theme.palette.primary.light, 0.5) },
];

export const RadarData = [
  {
    name: 'January',
    sales: 450,
    expenses: 300,
  },
  {
    name: 'February',
    sales: 600,
    expenses: 400,
  },
  {
    name: 'March',
    sales: 800,
    expenses: 500,
  },
];

export const Radars = (theme: Theme) => [
  { key: 1, fill: theme.palette.primary.main, dataKey: 'sales', fillOpacity: 0.5 },
  { key: 2, fill: theme.palette.secondary.main, dataKey: 'expenses', fillOpacity: 0.5 },
];
