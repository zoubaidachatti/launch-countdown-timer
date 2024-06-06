import { RootStyle } from './AppSkeleton.style';
import { Content, FloatingElement, SearchBar, TopSkeleton } from './Elements';

export const AppSkeleton = () => {
  return (
    <RootStyle>
      <TopSkeleton />
      <SearchBar />
      <Content />
      <FloatingElement />
    </RootStyle>
  );
};

export default AppSkeleton;
