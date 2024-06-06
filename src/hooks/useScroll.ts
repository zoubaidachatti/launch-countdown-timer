import { useState, useEffect } from 'react';

export const useScroll = (threshold: number = 9): boolean => {
  const [isPastThreshold, setIsPastThreshold] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
};
