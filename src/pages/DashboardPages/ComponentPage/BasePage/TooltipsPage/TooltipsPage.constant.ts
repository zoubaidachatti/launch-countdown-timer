import { generateUniqueIds } from '@/utils';

export const uniqueIds = generateUniqueIds(15);

export const tooltipsPlacements = [
  {
    id: uniqueIds[0],
    label: 'tooltip.top_start',
    content: 'tooltip.cat_facts',
    placement: 'top-start',
  },
  {
    id: uniqueIds[1],
    label: 'tooltip.top',
    content: 'tooltip.frog_facts',
    placement: 'top',
  },
  {
    id: uniqueIds[2],
    label: 'tooltip.top_end',
    content: 'tooltip.dog_facts',
    placement: 'top-end',
  },
  {
    id: uniqueIds[3],
    label: 'tooltip.left_start',
    content: 'tooltip.rabbit_facts',
    placement: 'left-start',
  },
  {
    id: uniqueIds[4],
    label: 'tooltip.left',
    content: 'tooltip.turtle_facts',
    placement: 'left',
  },
  {
    id: uniqueIds[5],
    label: 'tooltip.left_end',
    content: 'tooltip.raccoon_facts',
    placement: 'left-end',
  },
  {
    id: uniqueIds[6],
    label: 'tooltip.right_start',
    content: 'tooltip.lama_facts',
    placement: 'right-start',
  },
  {
    id: uniqueIds[7],
    label: 'tooltip.right',
    content: 'tooltip.alien_facts',
    placement: 'right',
  },
  {
    id: uniqueIds[8],
    label: 'tooltip.right_end',
    content: 'tooltip.unicorn_facts',
    placement: 'right-end',
  },
  {
    id: uniqueIds[9],
    label: 'tooltip.bottom_start',
    content: 'tooltip.panda_facts',
    placement: 'bottom-start',
  },
  {
    id: uniqueIds[10],
    label: 'tooltip.bottom',
    content: 'tooltip.hamster_facts',
    placement: 'bottom',
  },
  {
    id: uniqueIds[11],
    label: 'tooltip.bottom_end',
    content: 'tooltip.bear_facts',
    placement: 'bottom-end',
  },
];

export const tooltipVariants = [
  { id: uniqueIds[12], label: 'tooltip.normal_tooltip' },
  { id: uniqueIds[13], label: 'tooltip.tooltip_with_arrow', arrow: true },
];
