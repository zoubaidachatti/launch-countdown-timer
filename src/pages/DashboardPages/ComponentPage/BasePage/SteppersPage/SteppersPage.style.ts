import { ColorsConfig, Layout } from '@/config/constants';
import { Stack, StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: Layout.linearGradient(
        theme.palette.primary.dark,
        theme.palette.primary.main,
        theme.palette.primary.light,
      ),
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: Layout.linearGradient(
        theme.palette.primary.dark,
        theme.palette.primary.main,
        theme.palette.primary.light,
      ),
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 1,
  },
}));

export const SecondCustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: Layout.linearGradient(
        theme.palette.primary.dark,
        theme.palette.primary.main,
        theme.palette.primary.light,
      ),
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: Layout.linearGradient(
        theme.palette.success.dark,
        theme.palette.success.main,
        theme.palette.success.light,
      ),
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 10,
  },
}));

export const CustomStepOrder = styled(Stack)(
  ({ theme }) =>
    ({ done, active }: { done: string; active: string }) => ({
      borderRadius: '50%',
      width: 35,
      height: 35,
      color: ColorsConfig.grey[50],
      background: Layout.linearGradient(
        done === `${true}`
          ? theme.palette.success.dark
          : active === `${true}`
            ? theme.palette.primary.dark
            : theme.palette.grey[500],
        done === `${true}`
          ? theme.palette.success.main
          : active === `${true}`
            ? theme.palette.primary.main
            : theme.palette.grey[300],
        done === `${true}`
          ? theme.palette.success.light
          : active === `${true}`
            ? theme.palette.primary.light
            : theme.palette.grey[200],
      ),
      svg: {
        fill: ColorsConfig.grey[50],
      },
      justifyContent: 'center',
      alignItems: 'center',
    }),
);
