import { Carousel, CustomCard } from '@/components';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  Animations,
  Autoplay,
  Content,
  Controls,
  FirstCarouselSlides,
  Indicators,
} from './CarouselPage.constants';

export const CarouselPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header="carousel.basic_carousels">
        <Stack width={'100%'} height={{ xs: 300, md: 500 }}>
          <Carousel slides={FirstCarouselSlides} controls indicators />
        </Stack>
      </CustomCard>
      <CustomCard header="carousel.autoplay">
        <Stack spacing={2} direction={'column'}>
          {Autoplay.map(({ id, label, autoplay, autoplaySpeed, pauseOnHover, slides }) => (
            <Stack key={id} spacing={1} direction={'column'}>
              <Typography>{t(label)}</Typography>
              <Stack height={{ xs: 300, md: 500 }} width={{ xs: '100%', md: 500 }}>
                <Carousel
                  slides={slides}
                  controls
                  autoplay={autoplay}
                  autoplaySpeed={autoplaySpeed}
                  pauseOnHover={pauseOnHover}
                  indicators
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="carousel.indicators">
        <Stack spacing={2} direction={'column'}>
          {Indicators.map(
            ({ id, indicators, label, customIndicator, indicatorsPosition, slides }) => (
              <Stack key={id} spacing={1} direction={'column'}>
                <Typography>{t(label)}</Typography>
                <Stack height={{ xs: 300, md: 500 }} width={{ xs: '100%', md: 500 }}>
                  <Carousel
                    slides={slides}
                    controls
                    indicators={indicators}
                    indicatorsPosition={indicatorsPosition}
                    customIndicator={customIndicator}
                  />
                </Stack>
              </Stack>
            ),
          )}
        </Stack>
      </CustomCard>
      <CustomCard header="carousel.controls">
        <Stack spacing={2} direction={'column'}>
          {Controls.map(({ id, label, controls, customControls, slides }) => (
            <Stack key={id} spacing={1} direction={'column'}>
              <Typography>{t(label)}</Typography>
              <Stack height={{ xs: 300, md: 500 }} width={{ xs: '100%', md: 500 }}>
                <Carousel
                  slides={slides}
                  controls={controls}
                  indicators
                  customControls={customControls}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="carousel.animation">
        <Stack spacing={2} direction={'column'}>
          {Animations.map(({ id, label, animation, slides }) => (
            <Stack key={id} spacing={1} direction={'column'}>
              <Typography>{t(label)}</Typography>
              <Stack height={{ xs: 300, md: 500 }} width={{ xs: '100%', md: 500 }}>
                <Carousel slides={slides} controls indicators animation={animation} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="carousel.slide_content">
        <Stack spacing={2} direction={'column'}>
          {Content.map(({ id, label, slides }) => (
            <Stack key={id} spacing={1} direction={'column'}>
              <Typography>{t(label)}</Typography>
              <Stack height={{ xs: 300, md: 500 }} width={{ xs: '100%', md: 500 }}>
                <Carousel slides={slides} controls indicators animation={'slide'} />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
};

export default CarouselPage;
