import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

// Main container style
export const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  maxWidth: 'xl',
  boxSizing: 'border-box',
  overflow: 'visible',

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
}));

export const StyledGridContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: 'calc(100vh - 8rem)',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}));



export const StyledGridItem = styled(Grid)(({ theme }) => ({
  flex: '1 0 50%', // This ensures each section takes up 50% of the parent's width
  height: '100%',
  overflowY: 'auto', // This ensures a scrollbar appears if content exceeds the container height

  [theme.breakpoints.down('sm')]: {
    flex: '1 0 auto',
    height: 'auto',
  },
}));

export const LeftGridItem = styled(StyledGridItem)(({ theme }) => ({
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    overflowY: 'auto',
  },
}));

// Styled absolute div for the radial cursor circle
export const StyledAbsoluteDiv = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

