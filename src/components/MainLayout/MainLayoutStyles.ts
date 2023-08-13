import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

export const StyledContainer = styled(Container)({
  height: '100vh',
  width: '100vw',
  position: 'relative',
  marginBottom: 0,
  margin: 0,
  padding: 0,
});

export const StyledGridContainer = styled(Grid)({
  height: '100%',
  width: '100vw',
});

export const StyledGridItem = styled(Grid)({
  height: '100%',
});

export const StyledAbsoluteDiv = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
