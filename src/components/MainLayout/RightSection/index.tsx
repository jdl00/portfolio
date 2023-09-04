import React from 'react';

import AboutMe from './AboutMe';
import JobExperience from './Experience';
import { MainContainer } from './RightStyles';

const RightSection: React.FC = () => {
  return (
    <MainContainer>
      <AboutMe />
      <JobExperience />
    </MainContainer>
  );
};

export default RightSection;