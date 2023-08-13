import React from 'react';

import { StyledBoxWithPadding, StyledBox, StyledInnerBox, StyledPaper } from './LeftStyles';

function LeftSection() {
  return (
    <>
      <StyledBoxWithPadding>
        <StyledPaper>
          <StyledInnerBox>Box 1</StyledInnerBox>
        </StyledPaper>
      </StyledBoxWithPadding>
      <StyledBox>
        <StyledPaper>
          <StyledInnerBox>Box 2</StyledInnerBox>
        </StyledPaper>
      </StyledBox>
    </>
  );
}

export default LeftSection;

