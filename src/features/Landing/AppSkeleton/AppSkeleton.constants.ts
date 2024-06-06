import { Layout } from '@/config/constants';

export const ElementsBoxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
export const ElementsBoxShadow2 =
  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) -4px 3px 4px 0px';

export const ElementsBorderRadius = Layout.borderRadius + 'px';

export const RootPadding = '10px';

export const ElementsFill = (light: string, main: string) =>
  `linear-gradient(145deg, ${light}, ${main})`;
