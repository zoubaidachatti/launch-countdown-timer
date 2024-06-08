import { MainSection, ProductsSection } from '@/features';
import { Stack } from '@mui/material';

export const LandingPage = () => {
  return (
    <Stack spacing={{ xs: '2.5rem', md: 10 }}>
      <MainSection />
      <ProductsSection />
    </Stack>
  );
};

export default LandingPage;
