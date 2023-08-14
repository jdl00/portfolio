import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
}));
