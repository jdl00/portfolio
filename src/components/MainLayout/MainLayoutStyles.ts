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
});

export const StyledGridItem = styled(Grid)({
  height: '100%',
  '&:nth-child(1)': {
    position: 'fixed',
    top: '4rem',    // Add top padding to match container
    left: '6rem',   // Add left padding to match container
    width: 'calc(50vw - 6rem)',   // Adjust width to account for padding
    height: 'calc(100vh - 8rem)',  // Adjust for top and bottom padding
    overflowY: 'hidden',
  },
  '&:nth-child(2)': {
    marginLeft: 'calc(40vw)',
    overflowY: 'auto',
    height: 'calc(100vh + 50px)',
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

