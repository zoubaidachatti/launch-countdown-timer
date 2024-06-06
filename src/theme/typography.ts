import { TypographyOptions } from '@mui/material/styles/createTypography';

export const fontFamily1 = '"Fraunces", serif !important';
export const fontFamily2 = '"Barlow", sans-serif !important';

const typography: TypographyOptions = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,
  h1: {
    fontWeight: 900,
    fontSize: '3rem',
    lineHeight: '3rem',
    fontFamily: fontFamily1,
    letterSpacing: '.5rem',
  },
  h2: {
    fontWeight: 900,
    fontSize: '2.9rem',
    lineHeight: '1',
    fontFamily: fontFamily1,
  },
  h3: {
    fontWeight: 900,
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    fontFamily: fontFamily1,
  },
  h4: {
    fontWeight: 900,
    fontSize: '1.25rem',
    lineHeight: '1.3rem',
    fontFamily: fontFamily1,
  },
  h5: {
    fontSize: '1.1rem',
    lineHeight: '1.2rem',
    fontWeight: 400,
    textTransform: 'none',
    fontFamily: fontFamily1,
  },
  h6: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.1rem',
    fontFamily: fontFamily1,
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    fontWeight: 600,
    fontFamily: fontFamily2,
  },
  body2: {
    fontSize: '0.9rem',
    fontWeight: 600,
    lineHeight: '1.25rem',
    fontFamily: fontFamily2,
  },
  subtitle1: {
    fontSize: '1.125rem',
    lineHeight: '1.4',
    fontWeight: 600,
    fontFamily: fontFamily2,
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: '1.1rem',
    lineHeight: '1.4',
    fontFamily: fontFamily2,
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontWeight: 700,
    textTransform: 'none',
    fontFamily: fontFamily1,
  },
};

export default typography;
