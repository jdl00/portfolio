import React from "react";
import styled from "styled-components";

import { Containers } from './LeftStyles';
import { ReactComponent as GithubIcon } from "../../../assets/images/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/images/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../../assets/images/envelope.svg";

const StyledGithubIcon = styled(GithubIcon)(({ theme }) => ({
  fill: "#B1C2E0",
  height: '2rem',
  width: '2rem',
  marginRight: '1rem'
}));

const StyledLinkedinIcon = styled(LinkedinIcon)(({ theme }) => ({
  fill: "#B1C2E0",
  height: '2rem',
  width: '2rem',
  marginRight: '1rem'
}));

const StyledEmailIcon = styled(EmailIcon)(({ theme }) => ({
  fill: "#B1C2E0",
  height: '2rem',
  width: '2rem',
  marginRight: '1rem'
}));

const BuildIcons: React.FC = () => {
  return (
      <Containers.IconLinks>
      <StyledGithubIcon />
      <StyledLinkedinIcon />
      <StyledEmailIcon />
      </Containers.IconLinks>
  );
};

// TODO: Complete section
const BuildContentsAndLinks: React.FC = () => {
  return (
    <Containers.PaddedOuter style={{flexDirection: 'column', height: "70%", justifyContent: "flex-end", margin: '1rem, 1rem'}}>
      <BuildIcons />
    </Containers.PaddedOuter>
    );
};

export default BuildContentsAndLinks;

