import React from 'react';

import { StyledBoxWithPadding,
    StyledInnerBox,
    StyledPaper,
    NameHeader,
    CurrentTitle,
    ShortDescription } from './LeftStyles';

const BuildTitleHeadline: React.FC = () => {
    return (
        <StyledBoxWithPadding>
            <StyledPaper>
            <StyledInnerBox>
                <NameHeader variant='h1'>Jonas Lindstrom</NameHeader>
                <CurrentTitle variant='h2'>
                    Graduate Software Engineer
                </CurrentTitle>
                <ShortDescription variant='h3'>
                    I craft full-stack applications,
                    combining frontend artistry with backend precision.
                </ShortDescription>
            </StyledInnerBox>
            </StyledPaper>
      </StyledBoxWithPadding>
  );
};

export default BuildTitleHeadline;
