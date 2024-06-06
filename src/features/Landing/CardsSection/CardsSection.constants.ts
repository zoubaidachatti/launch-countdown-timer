import Egg from '@/assets/images/image-transform.jpg';
import Cup from '@/assets/images/image-stand-out.jpg';
import Cherry from '@/assets/images/image-graphic-design.jpg';
import Orange from '@/assets/images/image-photography.jpg';

export enum CardType {
  content = 1,
  image = 2,
  contentImage = 3,
}

export const cards = [
  {
    title: 'content.transform_your_brand',
    content: 'content.transform_your_brand_description',
    type: CardType.content,
  },
  { type: CardType.image, img: Egg },
  { type: CardType.image, img: Cup },
  { title: 'content.stand_out', content: 'content.stand_out_description', type: CardType.content },

  {
    title: 'content.graphic_design',
    content: 'content.graphic_design_description',
    type: CardType.contentImage,
    img: Cherry,
  },
  {
    title: 'content.photography',
    content: 'content.photography_description',
    type: CardType.contentImage,
    img: Orange,
  },
];
