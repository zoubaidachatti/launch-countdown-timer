import { calculateTimeRemaining } from '@/utils';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { targetDate } from './Counter.constants';
import CounterItem from './CounterItem/CounterItem';

export const Counter = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Stack justifyContent={'center'} direction={'row'} spacing={{ xs: 0.75, sm: 2.5 }}>
      {timeRemaining
        .filter((count) => count.label !== 'content.years' && count.label !== 'content.year')
        .map((count, index) => (
          <CounterItem key={`count_${index}`} {...count} />
        ))}
    </Stack>
  );
};

export default Counter;
