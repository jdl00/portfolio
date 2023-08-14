import React from "react";

import { StyledBox, StyledInnerBox, StyledPaper } from './LeftStyles';


const BuildContentsAndLinks: React.FC = () => {
  return (
    <StyledBox>
      <StyledPaper>
        <StyledInnerBox>
          Box 2
        </StyledInnerBox>
      </StyledPaper>
    </StyledBox>
    );
};

export default BuildContentsAndLinks;

