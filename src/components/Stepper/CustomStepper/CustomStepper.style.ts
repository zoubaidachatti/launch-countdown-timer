import { Layout } from '@/config/constants';
import { OrientationType } from '@/types/interfaces';
import { Stack, StepConnector, stepConnectorClasses, styled } from '@mui/material';

type OrderStyleProps = { iscompleted?: string; isactive?: string; isdisabled?: string };

export const OrderStyle = styled(Stack)(
  ({ theme }) =>
    ({ iscompleted, isactive, isdisabled }: OrderStyleProps) => ({
      width: 25,
      height: 25,
      borderRadius: Layout.borderRadius,
      color: theme.palette.grey[50],
      fontWeight: 700,
      opacity: isdisabled === `${true}` ? '0.5' : undefined,
      backgroundColor:
        iscompleted === `${true}` || isactive === `${true}`
          ? theme.palette.primary.main
          : theme.palette.grey[400],
      justifyContent: 'center',
      alignItems: 'center',
      cursor:
        isdisabled === `${true}` || iscompleted === `${true}` || isactive === `${true}`
          ? 'default'
          : 'pointer',
    }),
);

export const ConnectorStyle = styled(StepConnector)(
  ({ theme }) =>
    ({ orientation }: { orientation?: OrientationType }) => ({
      [`&.${stepConnectorClasses.root}`]: {
        marginLeft: 0,
        [`& .${stepConnectorClasses.line}`]: {
          marginBottom: orientation === 'vertical' ? 4 : undefined,
          borderWidth: 3,
        },
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.primary.main,
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.primary.main,
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.grey[400],
        borderTopWidth: 3,
        borderRadius: Layout.borderRadius,
      },
    }),
);
