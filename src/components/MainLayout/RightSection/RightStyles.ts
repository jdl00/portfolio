import { styled } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledParagraph = styled(Typography)({
  paddingTop: '1rem',
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  paddingRight: 0,
}));
