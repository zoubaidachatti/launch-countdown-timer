import { Variant } from '@mui/material/styles/createTypography';

export const titleVariants: Variant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
export const subtitleVariants: Variant[] = ['subtitle1', 'subtitle2'];
export const bodyVariants: Variant[] = ['body1', 'body2'];
export const buttonVariants: Variant[] = ['button'];

export const labelVariants: { title: string; exampleText: string; variants: Variant[] }[] = [
  { title: 'typography.title', exampleText: 'typography.title_example', variants: titleVariants },
  {
    title: 'typography.subtitle',
    exampleText: 'typography.subtitle_example',
    variants: subtitleVariants,
  },
  { title: 'typography.body', exampleText: 'typography.body_example', variants: bodyVariants },
  {
    title: 'typography.button',
    exampleText: 'typography.button_example',
    variants: buttonVariants,
  },
];
