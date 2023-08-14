import React from 'react';

import { StyledBoxWithPadding, StyledInnerBox, StyledPaper, NameHeader } from './LeftStyles';

const BuildTitleHeadline: React.FC = () => {
    return (
        <StyledBoxWithPadding>
            <StyledPaper>
            <StyledInnerBox>
                <NameHeader variant='h1'>Jonas Lindstrom</NameHeader>
                <h2 style={{textAlign: "center", marginTop: "0", fontWeight: "bold", paddingTop: "0%"}}>Graduate Software Engineer</h2>
                <h4>I Build API's and fullstack applications.</h4>
            </StyledInnerBox>
            </StyledPaper>
      </StyledBoxWithPadding>
  );
};

export default BuildTitleHeadline;
