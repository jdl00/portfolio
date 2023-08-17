import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

// Main container style
export const StyledContainer = styled(Container)({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  maxWidth: 'xl',
  boxSizing: 'border-box',
});

// Styled grid container for splitting sections
export const StyledGridContainer = styled(Grid)({
  height: '100%',
  boxSizing: 'border-box',
  width: '100%',
});

export const StyledGridItem = styled(Grid)({
  height: '100%',
  '&:nth-child(1)': { // Targets the LeftSection
    position: 'fixed',
    top: '0',
    left: '0',
    width: '50vw', // assuming it takes half the viewport
    height: '100vh', // it covers the full height of the viewport
    overflowY: 'hidden',
  },
  '&:nth-child(2)': { // Targets the RightSection
    marginLeft: '50vw', // push it to the right, equivalent to the width of the left section
    overflowY: 'auto',
    height: 'calc(100vh + 50px)', // Example: 50px past viewport, adjust as needed
  }
});


// Styled absolute div for the radial cursor circle
export const StyledAbsoluteDiv = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

