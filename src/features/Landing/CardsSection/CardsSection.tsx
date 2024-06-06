import { Grid } from '@mui/material';
import { CardType, cards } from './CardsSection.constants';
import ContentCard from './ContentCard/ContentCard';
import ImageCard from './ImageCard/ImageCard';
import ContentCardImage from './ContentCardImage/ContentCardImage';

export const CardsSection = () => {
  return (
    <Grid container width={'100%'}>
      {cards.map((card, index) => (
        <Grid
          height={{ xs: 400, sm: 700, md: 400 }}
          sx={{ aspectRatio: '1 / 1' }}
          key={`card_${index}`}
          item
          xs={12}
          sm={6}
        >
          {card.type === CardType.content && card.title && card.content && (
            <ContentCard isFirst={index === 0} {...card} />
          )}
          {card.type === CardType.image && card.img && <ImageCard src={card.img} />}
          {card.type === CardType.contentImage && card.img && card.title && card.content && (
            <ContentCardImage
              blueContent={index === cards.length - 1}
              src={card.img}
              title={card.title}
              content={card.content}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsSection;
