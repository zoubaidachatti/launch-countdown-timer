import { ColorsConfig, Layout } from '@/config/constants';
import { Button, Stack, Typography, keyframes, styled } from '@mui/material';

const jump = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.45em);
    }
    100% {
      transform: translateY(0);
    }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: ${ColorsConfig.grey[900]};
  }
`;

export const HeroSectionStyle = styled(Stack)(({ theme }) => ({
  background: Layout.landingPageGradient(theme.palette.primary.light, theme.palette.info.light),
  paddingInline: '4%',
  height: '100vh',
  paddingTop: 70,
  maxHeight: '100vh',
  position: 'relative',
  width: '100vw',
  maxWidth: '100vw',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    borderLeft: '100vw solid transparent',
    borderBottom: `150px solid ${theme.palette.grey[100]}`,
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: ColorsConfig.grey[900],
  fontWeight: 700,
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    overflow: 'hidden',
    borderRight: `4px solid ${ColorsConfig.grey[900]}`,
    whiteSpace: 'nowrap',
    margin: '0 auto',
    animation: `${typing} 1.75s steps(40, end) , ${blink} .75s step-end infinite`,
    height: 43,
    display: 'flex',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
    textAlign: 'center',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '1rem',
  },
}));

export const StyledDescription = styled(Stack)(({ theme }) => ({
  fontSize: '1.4rem',
  lineHeight: '2rem',
  fontWeight: 400,

  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: ColorsConfig.grey[50],
  border: 'none',
  backgroundColor: ColorsConfig.grey[900],
  whiteSpace: 'nowrap',
  ':hover': {
    animation: `${jump} 560ms ease-in-out`,
    backgroundColor: ColorsConfig.grey[900],
    border: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    minWidth: 40,
  },
}));
