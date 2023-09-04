import React from "react";

import { StyledInnerBox } from './RightStyles';
import aboutMeContent from './AboutMeContent';
import { Fade } from "react-awesome-reveal";

const AboutMe: React.FC = () => {
    return(
      <Fade>
        <StyledInnerBox>{aboutMeContent}</StyledInnerBox>
      </Fade>
    );
};

export default AboutMe;