import { styled, alpha } from '@mui/system';
import { Box, Container, Paper, Typography } from '@mui/material';

/**
 * Styled headers
 */
export const Headers = {
  Name: styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: '3rem',
  })),

  Title: styled(Typography)({
    fontWeight: "normal",
    fontSize: '1.5rem',
    paddingTop: '1rem',
  }),

  Description: styled(Typography)(({ theme }) => ({
    fontWeight: 'normal',
    fontSize: '1rem',
    paddingTop: '1rem',
    color: alpha(theme.palette.secondary.main, 0.85),
    alignItems: 'flex-start',
  })),
};

/**
 * Styled containers
 */
export const Containers = {
  PaddedOuter: styled(Container)(({ theme }) => ({
    margin: '1rem, 1rem',
    marginBottom: theme.spacing(2),
    display: 'flex',
    backgroundColor: 'transparent',
  })),

  LayoutPaper: styled(Paper)(({ theme }) => ({
    width: '100%',
    backgroundColor: 'transparent',
  })),

  Content: styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
  })),

  IconLinks: styled(Box)({
    alignItems: 'end',
  }),
};