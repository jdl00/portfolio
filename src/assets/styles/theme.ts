import { createTheme } from '@mui/material/styles';

import colors from './colors';
import backgroundColors from './BackgroundColors';

const theme = createTheme({

  typography: {
    fontFamily: 'IBM Plex Sans, Inter, Arial, sans-serif', // Primary font + fallback fonts
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
  }
});

export default theme;
