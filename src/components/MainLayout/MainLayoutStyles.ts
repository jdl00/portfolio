import { styled } from '@mui/system';
import { Container, Grid, Divider } from '@mui/material';

// Main container style
export const StyledContainer = styled(Container)({
  width: '100%',
  height: '100vh', // Ensure it takes up the entire viewport height
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  maxWidth: 'xl',
  boxSizing: 'border-box',
  overflow: 'visible', // Set to visible
});

export const StyledGridContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 8rem)', // Adjust this value based on your top and bottom padding
});


export const StyledGridItem = styled(Grid)({
  flex: '1 0 50%', // This ensures each section takes up 50% of the parent's width
  height: '100%',
  overflowY: 'auto', // This ensures a scrollbar appears if content exceeds the container height
});

export const LeftGridItem = styled(StyledGridItem)({
  overflowY: 'hidden'
});

// Styled absolute div for the radial cursor circle
export const StyledAbsoluteDiv = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

