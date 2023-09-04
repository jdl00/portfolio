import React from "react";

import JobExperienceContent from "./JobExperienceContent";
import { StyledInnerBox } from "./RightStyles";
import { Fade } from "react-awesome-reveal";


const JobExperience: React.FC = () => {
    return (
        <Fade>
            <StyledInnerBox>{JobExperienceContent}</StyledInnerBox>
        </Fade>
    );

};

export default JobExperience;