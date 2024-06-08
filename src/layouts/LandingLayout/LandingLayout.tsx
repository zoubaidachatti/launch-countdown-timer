import { ReactNode } from 'react';
import { LandingNavbar } from '.';
import { RootStyle } from './LandingLayout.style';

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RootStyle spacing={'4rem'}>
      <LandingNavbar />
      {children}
      {/* <LandingFooter /> */}
    </RootStyle>
  );
};

export default LandingLayout;
