import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const StyledBoxWithPadding = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  flexGrow: 1,
  display: 'flex',
  paddingTop: '10vh',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  flexGrow: 1,
  display: 'flex',
}));

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
}));
