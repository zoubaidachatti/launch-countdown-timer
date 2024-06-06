import { ReactNode } from 'react';

export type CarouselProps = {
  slides: CarouseSlideType[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  initialSlideIndex?: number;
  pauseOnHover?: boolean;
  controls?: boolean;
  customControls?: ReactNode;
  indicators?: boolean;
  customIndicator?: ReactNode;
  indicatorsPosition?: 'inside' | 'outside';
  animation?: 'fade' | 'slide';
  onSlideChange?: (slide: number) => void;
  onSlideClick?: (slide: number) => void;
};

export type UseCarouselProps = {
  initialSlideIndex?: number;
  slides: CarouseSlideType[];
  animation?: 'fade' | 'slide';
  autoplay?: boolean;
  autoplaySpeed?: number;
  onSlideChange?: (slide: number) => void;
};

export type CarouseSlideType = {
  id: number;
  order: number;
  src?: string;
  content?: ReactNode;
};
