import { styled } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';

/**
 * Below is the styled headers
 */

export const NameHeader = styled(Typography)({
  fontWeight: 700,
  fontSize: '3rem'
});

export const CurrentPositionHeader = styled(Typography)({


});


/**
 * Below are the styled boxes.
 */
export const StyledBoxWithPadding = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  backgroundColor: 'transparent',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  backgroundColor: 'transparent',
}));

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'transparent',
}));
