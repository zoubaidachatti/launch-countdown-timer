import SortIcon from '@/assets/icons/swap.svg?react';
import { OrderType } from '@/types/interfaces';
import { styled } from '@mui/material';

type DirectionProps = {
  direction?: OrderType;
};

export const SortIconStyle = styled(SortIcon)(({ direction }: DirectionProps) => ({ theme }) => ({
  '& #sortUp': {
    fill: direction === 'desc' ? theme.palette.primary.main : theme.palette.grey[500],
  },
  '& #sortDown': {
    fill: direction === 'asc' ? theme.palette.primary.main : theme.palette.grey[500],
  },
}));
