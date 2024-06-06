import HeartIcon from '@/assets/icons/favorite_filled.svg?react';
import Image7 from '@/assets/images/bird.jpg';
import Image2 from '@/assets/images/cat_birthday.jpg';
import Image8 from '@/assets/images/duck.jpg';
import Image1 from '@/assets/images/frog_mirror.jpg';
import Image9 from '@/assets/images/heart_shaped_sunglasses.jpg';
import Image6 from '@/assets/images/mouse_cookie.jpg';
import Image3 from '@/assets/images/mouse_face_mask.jpg';
import Image4 from '@/assets/images/mouse_knife.jpg';
import Image5 from '@/assets/images/mouse_toy.jpg';
import Image10 from '@/assets/images/smol.jpg';
import Image11 from '@/assets/images/sunglasses.jpg';
import { CarouseSlideType } from '@/components';
import { ColorsConfig } from '@/config/constants';
import i18nInstance from '@/locales/i18nInstance';
import { generateUniqueIds } from '@/utils';
import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

const uniqueIds = generateUniqueIds(13);
const slidesIds = generateUniqueIds(21);

const SlideContent = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <Stack
    width={'calc(100% - 129px)'}
    color={ColorsConfig.grey[50]}
    spacing={2}
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
  >
    <Typography textAlign={'center'} variant="h2">
      {i18nInstance.t(title)}
    </Typography>
    <Typography fontSize={'1.25rem'} textAlign={'center'}>
      {i18nInstance.t(subtitle)}
    </Typography>
  </Stack>
);

export const FirstCarouselSlides: CarouseSlideType[] = [
  { id: slidesIds[0], order: 0, src: Image1 },
  { id: slidesIds[1], order: 1, src: Image2 },
  { id: slidesIds[2], order: 2, src: Image3 },
  { id: slidesIds[3], order: 3, src: Image4 },
  { id: slidesIds[4], order: 4, src: Image5 },
  { id: slidesIds[5], order: 5, src: Image6 },
];

export const SecondCarouselSlides: CarouseSlideType[] = [
  { id: slidesIds[6], order: 0, src: Image7 },
  { id: slidesIds[7], order: 1, src: Image8 },
  { id: slidesIds[8], order: 2, src: Image9 },
  { id: slidesIds[9], order: 3, src: Image10 },
  { id: slidesIds[10], order: 4, src: Image11 },
];
export const ThirdCarouselSlides: CarouseSlideType[] = [
  {
    id: slidesIds[11],
    order: 0,
    src: Image7,
    content: <SlideContent title="carousel.title_1" subtitle="carousel.content_1" />,
  },
  {
    id: slidesIds[12],
    order: 1,
    src: Image8,
    content: <SlideContent title="carousel.title_2" subtitle="carousel.content_2" />,
  },
  {
    id: slidesIds[13],
    order: 2,
    src: Image9,
    content: <SlideContent title="carousel.title_3" subtitle="carousel.content_3" />,
  },
  {
    id: slidesIds[14],
    order: 3,
    src: Image10,
    content: <SlideContent title="carousel.title_4" subtitle="carousel.content_4" />,
  },
  {
    id: slidesIds[15],
    order: 4,
    src: Image11,
    content: <SlideContent title="carousel.title_5" subtitle="carousel.content_5" />,
  },
];

export const FourthCarouselSlides: CarouseSlideType[] = [
  {
    id: slidesIds[16],
    order: 0,
    content: <SlideContent title="carousel.title_1" subtitle="carousel.content_1" />,
  },
  {
    id: slidesIds[17],
    order: 1,
    content: <SlideContent title="carousel.title_2" subtitle="carousel.content_2" />,
  },
  {
    id: slidesIds[18],
    order: 2,
    content: <SlideContent title="carousel.title_3" subtitle="carousel.content_3" />,
  },
  {
    id: slidesIds[19],
    order: 3,
    content: <SlideContent title="carousel.title_4" subtitle="carousel.content_4" />,
  },
  {
    id: slidesIds[20],
    order: 4,
    content: <SlideContent title="carousel.title_5" subtitle="carousel.content_5" />,
  },
];

export const Autoplay = [
  {
    id: uniqueIds[0],
    label: 'carousel.autoplay',
    autoplay: true,
    slides: FirstCarouselSlides,
  },
  {
    id: uniqueIds[1],
    label: 'carousel.autoplay_speed',
    autoplay: true,
    autoplaySpeed: 2000,
    slides: SecondCarouselSlides,
  },
  {
    id: uniqueIds[2],
    label: 'carousel.pause_on_hover',
    autoplay: true,
    pauseOnHover: true,
    slides: FirstCarouselSlides,
  },
];

export const Indicators: {
  id: number;
  label: string;
  indicators: boolean;
  indicatorsPosition?: 'inside' | 'outside';
  customIndicator?: ReactNode;
  slides: CarouseSlideType[];
}[] = [
  {
    id: uniqueIds[3],
    label: 'carousel.indicator_position_inside',
    indicators: true,
    indicatorsPosition: 'inside',
    slides: FirstCarouselSlides,
  },
  {
    id: uniqueIds[4],
    label: 'carousel.indicator_position_outside',
    indicators: true,
    indicatorsPosition: 'outside',
    slides: SecondCarouselSlides,
  },
  {
    id: uniqueIds[5],
    label: 'carousel.custom_indicators',
    indicators: true,
    customIndicator: <HeartIcon />,
    slides: FirstCarouselSlides,
  },
  {
    id: uniqueIds[6],
    label: 'carousel.no_indicators',
    slides: SecondCarouselSlides,
    indicators: false,
  },
];

export const Controls = [
  {
    id: uniqueIds[7],
    label: 'carousel.custom_controls',
    controls: true,
    customControls: <HeartIcon style={{ transform: 'rotate(90deg)' }} />,
    slides: FirstCarouselSlides,
  },
  {
    id: uniqueIds[8],
    label: 'carousel.no_controls',
    controls: false,
    slides: SecondCarouselSlides,
  },
];

export const Animations: {
  id: number;
  label: string;
  animation?: 'fade' | 'slide';
  slides: CarouseSlideType[];
}[] = [
  {
    id: uniqueIds[9],
    label: 'carousel.fade_animation',
    animation: 'fade',
    slides: FirstCarouselSlides,
  },
  {
    id: uniqueIds[10],
    label: 'carousel.slide_animation',
    animation: 'slide',
    slides: SecondCarouselSlides,
  },
];
export const Content = [
  {
    id: uniqueIds[11],
    label: 'carousel.slides_with_content',
    animation: 'fade',
    slides: ThirdCarouselSlides,
  },
  {
    id: uniqueIds[12],
    label: 'carousel.slides_with_content_only',
    animation: 'slide',
    slides: FourthCarouselSlides,
  },
];
