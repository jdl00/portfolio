import { styled, alpha } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';

/**
 * Below is the styled headers
 */
export const NameHeader = styled(Typography)({
  fontWeight: 700,
  fontSize: '3rem',
});

export const CurrentTitle = styled(Typography)({
  fontWeight: "normal",
  fontSize: '1.5rem',
  paddingTop: '1rem',
});

export const ShortDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 'normal',
  fontSize: '1rem',
  paddingTop: '1rem',
  color: alpha(theme.palette.secondary.main, 0.85),
}));

/**
 * TODO: Refactor these names so that they more implicit
 * as to what style their for
 */

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
