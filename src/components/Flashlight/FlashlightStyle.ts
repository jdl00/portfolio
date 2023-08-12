// FlashlightStyles.ts
import styled from 'styled-components';

/**
 * Style for the gradient circle
 */
export const StyledBox = styled.div<{ circleDiameter: number }>`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .circle {
    width: ${props => `${props.circleDiameter}px`};
    height: ${props => `${props.circleDiameter}px`};
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    background: radial-gradient(circle at center, rgba(150, 152, 220, 0.5), rgba(50, 44, 80, 0.1), transparent);
    backdrop-filter: blur(25px);
    transition: transform 0.05s linear;
  }
`;
