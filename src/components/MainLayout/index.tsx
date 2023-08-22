import React, { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';


import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { StyledContainer, StyledGridContainer, StyledGridItem, StyledAbsoluteDiv } from './MainLayoutStyles';

/**
 * Interface containing children prop for the main layout
 */
interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Holds the relevant elements of the main page
 *
 * @param {ReactNode} children - The children of the page
 * @returns The main page component
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fade>
    <StyledContainer>
      <StyledGridContainer container spacing={3}>
        <StyledGridItem item xs={6}>
          <LeftSection />
        </StyledGridItem>
        <StyledGridItem item xs={6}>
          <RightSection />
        </StyledGridItem>
      </StyledGridContainer>
      {/** React component for flashlight effect */}
      <StyledAbsoluteDiv>
        {children}
      </StyledAbsoluteDiv>
    </StyledContainer>
    </Fade>
  );
};


export default MainLayout;
