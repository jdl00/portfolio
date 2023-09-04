import { styled, alpha } from '@mui/system';
import { Box, Container,  Typography } from '@mui/material';

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledParagraph = styled(Typography)({
  paddingTop: '0.5rem',
});

export const MainContainer = styled(Container)({
    width: '100%',
    overflow: 'auto',
    position: 'relative',


});

export const EmployerDate =  styled(Typography)(({ theme }) => ({
    fontWeight: "normal",
    fontSize: '1.1rem',
    paddingTop: '1rem',
    paddingBottom: '0rem',
    color: alpha(theme.palette.secondary.main, 0.85),
    alignItems: 'flex-start',
  }));