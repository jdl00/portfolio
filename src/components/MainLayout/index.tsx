import React, { ReactNode } from 'react';

import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
import { StyledContainer, StyledGridContainer, StyledGridItem, StyledAbsoluteDiv } from './MainLayoutStyles';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledContainer maxWidth={false}>
      <StyledGridContainer container spacing={3}>
        <StyledGridItem item xs={6}>
          <LeftSection />
        </StyledGridItem>
        <StyledGridItem item xs={6}>
          <RightSection />
        </StyledGridItem>
      </StyledGridContainer>
      <StyledAbsoluteDiv>
        {children}
      </StyledAbsoluteDiv>
    </StyledContainer>
);
};


export default MainLayout;
