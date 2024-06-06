import { HeroSection, CardsSection } from '@/features';
import { Stack } from '@mui/material';

export const LandingPage = () => {
  return (
    <Stack width={'100%'}>
      <HeroSection />
      <CardsSection />
    </Stack>
  );
};

export default LandingPage;
