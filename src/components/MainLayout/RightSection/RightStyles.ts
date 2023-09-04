import { styled } from '@mui/system';
import { Box, Container,  Typography } from '@mui/material';

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
}));

export const StyledParagraph = styled(Typography)({
  paddingTop: '1rem',
});

export const MainContainer = styled(Container)({
    width: '100%',
    overflow: 'auto',
    position: 'relative',


});
