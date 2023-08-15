import React from "react";

import { StyledInnerBox, StyledPaper } from './RightStyles';
import aboutMeContent from './AboutMeContent';

const AboutMe: React.FC = () => {
    return(
    <StyledPaper>
      <StyledInnerBox>{aboutMeContent}</StyledInnerBox>
    </StyledPaper>
    );
};

export default AboutMe;