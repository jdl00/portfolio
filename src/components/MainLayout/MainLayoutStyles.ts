import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

// Main container style
export const StyledContainer = styled(Container)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 6rem',
});

// Styled grid container for splitting sections
export const StyledGridContainer = styled(Grid)({
  height: '100%',
  width: '100%',
});

// Styled grid container for containing the sections
export const StyledGridItem = styled(Grid)({
  height: '100%',
});

// Styled absolute div for the radial cursor circle
export const StyledAbsoluteDiv = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
