import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { CarouseSlideType, UseCarouselProps } from './Carousel.type';

const useCarousel = ({
  initialSlideIndex,
  slides,
  animation,
  autoplay,
  autoplaySpeed,
  onSlideChange,
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(
    initialSlideIndex ? slides[initialSlideIndex] : slides[0],
  );

  const debouncedSlide = useDebounce(currentSlide, 300) as CarouseSlideType;
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('left');

  const initialAnimation = 'initialState';
  const animate = 'animateState';
  const exitAnimation = 'exitState';
  const transition = {
    type: 'tween',
    duration: 0.4,
  };
  const animationVariants = animation
    ? animation === 'fade'
      ? {
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }
      : {
          initialState: {
            x: animationDirection === 'left' ? '500px' : '-500px',
          },
          animateState: {
            x: 0,
          },
          exitState: {
            x: animationDirection === 'left' ? '-500px' : '500px',
          },
        }
    : undefined;

  useEffect(() => {
    const timeoutId =
      autoplay && !autoplayPaused
        ? setInterval(() => {
            onChangeSlide(debouncedSlide.order + 1);
          }, autoplaySpeed)
        : undefined;

    return () => clearTimeout(timeoutId);
  }, [debouncedSlide, autoplayPaused]);

  const onChangeSlide = (slideOrder: number) => {
    if (slideOrder > debouncedSlide.order) {
      setAnimationDirection('left');
    } else {
      setAnimationDirection('right');
    }
    let newOrder = slideOrder;

    if (newOrder >= slides.length) {
      newOrder = 0;
    }
    if (newOrder <= -1) {
      newOrder = slides.length - 1;
    }

    setCurrentSlide(slides[newOrder]);
    onSlideChange?.(newOrder);
  };

  return {
    initialAnimation,
    animate,
    transition,
    exitAnimation,
    animationVariants,
    debouncedSlide,
    onChangeSlide,
    setAutoplayPaused,
  };
};

export default useCarousel;
