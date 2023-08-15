import { createTheme } from '@mui/material/styles';

import colors from './colorPalette';
import backgroundColors from './backgroundPallete';

const theme = createTheme({

  typography: {
    fontFamily: 'IBM Plex Sans, Inter, Arial, sans-serif', // Primary font + fallback fonts
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  palette: {
    background: {
      default: backgroundColors.default,
      paper: backgroundColors.paper,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.info,
    },
    text: {
      primary: colors.primary,
      // secondary, hint, disabled... can also be set if needed
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: backgroundColors.default,
        },
      },
    },
  },
});

export default theme;
