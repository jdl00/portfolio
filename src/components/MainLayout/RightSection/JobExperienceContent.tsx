import React from 'react';

import { JobDescription, EmployerDate, GlowBox } from './RightStyles';
import { Fade } from 'react-awesome-reveal';

const JobExperienceContent = [
    <>
    <Fade>
        <GlowBox>
        <EmployerDate>
        <span style={{fontSize: "0.8rem", paddingRight: "1rem"}}>Sept 2021 - Sept 2022 </span>
        <strong>ITP Engines UK • Software Engineer</strong>
        </EmployerDate>
        <JobDescription>
            Delivered robust production code for high-profile clients like the European Space Agency. Led shifts in software practices, such as adopting test-driven development. Mentored new engineers through collaboration and a starter pack. Conducted meticulous code reviews for quality assurance. Collaborated with project managers for timely releases. Automated development tasks using Python, reducing downtime. Managed the 2022 Q1 service pack release from testing to deployment. Modernized the codebase through a project-wide refactor to C++17 standards.
        </JobDescription>
        </GlowBox>
    </Fade>
    <Fade>
        <GlowBox>
        <EmployerDate>
        <span style={{fontSize: "0.8rem", paddingRight: "1rem"}}>Sept 2021 - Sept 2022 </span>
        <strong>CloudCall • Software Engineer</strong>
        </EmployerDate>
        <JobDescription variant="body1">
        Developed and shipped a Space Invaders rendition using a tech stack of JavaScript, Electron, Phaser, and MongoDB. Created copyright-free graphics, organized development with scrum sprints, and assessed scalability and performance impacts. Coordinated with project managers to align requirements and design. Implemented a comprehensive testing scheme, including GUI reports and unit tests.
        </JobDescription>
        </GlowBox>
    </Fade>
    <Fade>
        <a href='https://drive.google.com/uc?export=download&id=1-LPQ8xzAFDGgc110Kt4XQ2z0iTnRCIpJ'style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
        See full resume
        </a>
    </Fade>
    </>
];


export default JobExperienceContent;