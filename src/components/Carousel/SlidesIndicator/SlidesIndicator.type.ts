import { ReactNode } from 'react';
import { CarouseSlideType } from '../Carousel.type';

export type SlidesIndicatorProps = {
  slides: CarouseSlideType[];
  customIndicator?: ReactNode;
  selectedIndicator?: number;
  onIndicatorClick: (index: number) => void;
};
