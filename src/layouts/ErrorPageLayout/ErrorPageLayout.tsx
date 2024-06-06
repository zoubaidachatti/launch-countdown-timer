import { ReactNode } from 'react';
import { StyledContainer } from './ErrorPageLayout.style';

export function ErrorPageLayout({ children }: { children: ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}
