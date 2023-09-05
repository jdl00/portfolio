import { styled, alpha } from '@mui/system';
import { Box, Container,  Typography } from '@mui/material';
import backgroundColors from '../../../assets/styles/backgroundPallete';

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledParagraph = styled(Typography)({
  paddingTop: '0.5rem',
});

export const JobDescription = styled(Typography)({
  paddingTop: '0.5rem',
  fontWeight: 'normal',
  fontSize: '0.9rem',
  paddingLeft: '9.8rem',

});

export const MainContainer = styled(Container)({
    width: '100%',
    overflow: 'auto',
    position: 'relative',


});

export const GlowBox = styled('div')(({ theme }) => ({
  borderRadius: '12px',  // Rounded corners
  padding: theme.spacing(2),
  transition: 'box-shadow 0.5s ease-in-out',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.02)', // Slightly lighter background
        boxShadow: '0 0 1px rgba(77, 145, 255, 0.07), 0 0 40px rgba(77, 145, 255, 0.07), 0 0 80px rgba(77, 145, 255, 0.07)',
  },
}));

export const EmployerDate =  styled(Typography)(({ theme }) => ({
    fontWeight: "normal",
    fontSize: '1rem',
    paddingTop: '1rem',
    paddingBottom: '0rem',
    color: alpha(theme.palette.secondary.main, 0.85),
    alignItems: 'flex-start',
  }));