import frogImg from '@/assets/images/frog.png';
import { CustomCardAction } from '@/components';
import { AlignmentType } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';

export const uniqueIds = generateUniqueIds(17);

export const simpleCards = [
  {
    id: uniqueIds[0],
    title: 'card.simple_card',
    contentTitle: 'card.lorem_title',
    content: 'card.lorem_content',
    contentHeight: 356,
  },
  {
    id: uniqueIds[1],
    title: 'card.card_with_header',
    header: 'card.frog_facts',
    contentTitle: 'card.frog',
    content: 'card.frog_facts_content',
    contentHeight: 317,
  },
  {
    id: uniqueIds[2],
    title: 'card.card_with_footer',
    header: 'card.turtle_facts',
    footer: 'card.turtle_facts_footer',
    contentTitle: 'card.turtle',
    content: 'card.turtle_facts_content',
    contentHeight: 282,
  },
  {
    id: uniqueIds[3],
    title: 'card.card_with_image',
    header: 'card.frog_facts',
    footer: 'card.frog_facts_footer',
    contentTitle: 'card.frog',
    content: 'card.frog_facts_content',
    image: frogImg,
    imageSx: { maxHeight: 150, objectFit: 'cover' },
    contentHeight: 127,
  },
];

export const cardAlignment = [
  {
    id: uniqueIds[4],
    title: 'card.centered_content',
    alignment: 'center',
    textAlign: 'center',
  },
  { id: uniqueIds[5], title: 'card.left_content', alignment: 'end', textAlign: 'right' },
  {
    id: uniqueIds[6],
    title: 'card.right_content',
    alignment: 'start',
    textAlign: 'left',
  },
];

export const cardVariants = [
  {
    id: uniqueIds[7],
    title: 'card.default_variant',
  },
  {
    id: uniqueIds[8],
    title: 'card.primary_variant',
    variant: 'primary',
  },
  {
    id: uniqueIds[9],
    title: 'card.secondary_variant',
    variant: 'secondary',
  },
  {
    id: uniqueIds[10],
    title: 'card.info_variant',
    variant: 'info',
  },
  {
    id: uniqueIds[11],
    title: 'card.success_variant',
    variant: 'success',
  },
  {
    id: uniqueIds[12],
    title: 'card.warning_variant',
    variant: 'warning',
  },
  {
    id: uniqueIds[13],
    title: 'card.error_variant',
    variant: 'error',
  },
];

export const cardsActions: {
  id: number;
  title: string;
  cardActions: CustomCardAction[];
  actionPlacement: AlignmentType;
}[] = [
  {
    id: uniqueIds[14],
    cardActions: [{ label: 'common.learn_more', variant: 'contained', action: () => {} }],
    actionPlacement: 'center',
    title: 'card.centered_actions',
  },
  {
    id: uniqueIds[15],
    cardActions: [
      { label: 'common.learn_more', variant: 'outlined', action: () => {} },
      { label: 'common.delete', variant: 'contained', color: 'error', action: () => {} },
    ],
    actionPlacement: 'start',
    title: 'card.left_aligned_actions',
  },
  {
    id: uniqueIds[16],
    cardActions: [
      { label: 'common.add', variant: 'text', action: () => {}, color: 'secondary' },
      { label: 'common.frog', variant: 'outlined', action: () => {}, color: 'success' },
    ],
    actionPlacement: 'end',
    title: 'card.right_aligned_actions',
  },
];
