import { TypographyOptions } from '@mui/material/styles/createTypography';

// - Family: [Inter](https://fonts.google.com/specimen/Inter)
// - Weights: 400, 700, 800

const typography: TypographyOptions = {
  fontWeightRegular: 400,
  fontWeightMedium: 700,
  fontWeightBold: 800,
  h1: {
    fontWeight: 800,
    fontSize: '3rem',
    lineHeight: '3rem',
    letterSpacing: '.5rem',
  },
  h2: {
    fontWeight: 800,
    fontSize: '2.9rem',
    lineHeight: '1',
  },
  h3: {
    fontWeight: 800,
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
  },
  h4: {
    fontWeight: 800,
    fontSize: '1.25rem',
    lineHeight: '1.3rem',
  },
  h5: {
    fontSize: '1.1rem',
    lineHeight: '1.2rem',
    fontWeight: 800,
    textTransform: 'none',
  },
  h6: {
    fontWeight: 800,
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },
  body1: {
    fontSize: '0.938rem',
    lineHeight: '1.6',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.938rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  subtitle1: {
    fontSize: '0.938rem',
    lineHeight: '1.4',
    fontWeight: 400,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '0.938rem',
    lineHeight: '1.4',
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontWeight: 700,
    textTransform: 'none',
  },
};

export default typography;
