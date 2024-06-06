import { Stack } from '@mui/material';
import LeftCard from './LeftCard/LeftCard';
import RightCard from './RightCard/RightCard';

export const Content = () => {
  return (
    <Stack
      position={'absolute'}
      direction={'row'}
      spacing={'0.5rem'}
      width="calc(100% - 48px)"
      height={'calc(100% - 100px)'}
      top={80}
      left={24}
    >
      <LeftCard />
      <RightCard />
    </Stack>
  );
};

export default Content;
