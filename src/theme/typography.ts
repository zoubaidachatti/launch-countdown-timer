import { TypographyOptions } from '@mui/material/styles/createTypography';

// - Family: [Red Hat Text](https://fonts.google.com/specimen/Red+Hat+Text)
// - Weights: 700

const typography: TypographyOptions = {
  fontWeightRegular: 700,
  fontWeightMedium: 700,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: '3.125rem',
    lineHeight: '1',
  },
  h2: {
    fontWeight: 700,
    fontSize: '1.375rem',
    letterSpacing: 'clamp(0.3em, 5vw, 0.275em)',
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.1rem',
    lineHeight: '1.3rem',
  },
  h5: {
    fontSize: '1.1rem',
    lineHeight: '1.2rem',
    fontWeight: 700,
    textTransform: 'none',
  },
  h6: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.1rem',
  },
  body1: {
    fontSize: 'clamp(0.7rem, 1vw, 1.4rem)',
    lineHeight: '1.6',
    fontWeight: 700,
  },
  body2: {
    fontSize: '0.938rem',
    fontWeight: 700,
    lineHeight: '1.25rem',
  },
  subtitle1: {
    fontSize: '0.938rem',
    lineHeight: '1.4',
    fontWeight: 700,
  },
  subtitle2: {
    fontWeight: 700,
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
