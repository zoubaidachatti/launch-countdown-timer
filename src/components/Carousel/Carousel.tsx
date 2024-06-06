import ArrowForward from '@/assets/icons/arrow_forward.svg?react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ControlContainer,
  RootStyle,
  SlideContentStyle,
  SlideImageStyle,
  SlideStyle,
} from './Carousel.style';
import { CarouselProps } from './Carousel.type';
import SlidesIndicator from './SlidesIndicator/SlidesIndicator';
import { IndicatorHeight } from './SlidesIndicator/SlidesIndicator.constants';
import useCarousel from './useCarousel';

export const Carousel = ({
  indicators,
  indicatorsPosition,
  slides,
  initialSlideIndex,
  customIndicator,
  controls,
  customControls,
  autoplay,
  animation,
  autoplaySpeed = 5000,
  pauseOnHover,
  onSlideClick,
  onSlideChange,
}: CarouselProps) => {
  const {
    debouncedSlide,
    initialAnimation,
    animate,
    transition,
    animationVariants,
    exitAnimation,
    onChangeSlide,
    setAutoplayPaused,
  } = useCarousel({
    initialSlideIndex,
    slides,
    animation,
    autoplay,
    autoplaySpeed,
    onSlideChange,
  });

  return (
    <RootStyle
      direction={'column'}
      height={'100%'}
      width={'100%'}
      onMouseEnter={() => (pauseOnHover ? setAutoplayPaused(true) : undefined)}
      onMouseLeave={() => (pauseOnHover ? setAutoplayPaused(false) : undefined)}
    >
      <SlideStyle
        height={indicatorsPosition === 'outside' ? `calc(100% - ${IndicatorHeight}px)` : '100%'}
        onClick={onSlideClick ? () => onSlideClick(debouncedSlide.order) : undefined}
        sx={{
          cursor: onSlideClick ? 'pointer' : undefined,
        }}
      >
        <AnimatePresence initial={false}>
          {debouncedSlide.src && (
            <motion.img
              key={debouncedSlide.src}
              style={SlideImageStyle}
              initial={initialAnimation}
              animate={animate}
              transition={transition}
              exit={exitAnimation}
              variants={animationVariants}
              src={debouncedSlide.src}
            />
          )}
          {debouncedSlide.content && (
            <motion.div
              key={debouncedSlide.id}
              style={SlideContentStyle}
              initial={initialAnimation}
              animate={animate}
              transition={transition}
              exit={exitAnimation}
              variants={animationVariants}
            >
              {debouncedSlide.content}
            </motion.div>
          )}
        </AnimatePresence>
        {indicators && indicatorsPosition !== 'outside' && (
          <SlidesIndicator
            slides={slides}
            onIndicatorClick={onChangeSlide}
            customIndicator={customIndicator}
            selectedIndicator={debouncedSlide.order}
          />
        )}
        {controls && (
          <>
            <ControlContainer
              right={0}
              onClick={(e) => {
                e.stopPropagation();
                onChangeSlide(debouncedSlide.order + 1);
              }}
            >
              {customControls ? <>{customControls}</> : <ArrowForward />}
            </ControlContainer>
            <ControlContainer
              left={0}
              sx={{ transform: 'rotate(180deg)' }}
              onClick={(e) => {
                e.stopPropagation();
                onChangeSlide(debouncedSlide.order - 1);
              }}
            >
              {customControls ? <>{customControls}</> : <ArrowForward />}
            </ControlContainer>
          </>
        )}
      </SlideStyle>
      {indicators && indicatorsPosition === 'outside' && (
        <SlidesIndicator
          slides={slides}
          onIndicatorClick={onChangeSlide}
          customIndicator={customIndicator}
          selectedIndicator={debouncedSlide.order}
        />
      )}
    </RootStyle>
  );
};
