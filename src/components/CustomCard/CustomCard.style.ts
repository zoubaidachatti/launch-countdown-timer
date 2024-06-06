import { Layout } from '@/config/constants';
import { Card, Stack, Theme, alpha, styled } from '@mui/material';

const generateStringFromVariant = (
  cardvariant: string | undefined,
  theme: Theme,
  isBorder?: boolean,
) => {
  switch (cardvariant) {
    case 'primary':
      return theme.palette.primary.main;
    case 'secondary':
      return theme.palette.secondary.main;
    case 'success':
      return theme.palette.success.main;
    case 'info':
      return theme.palette.info.main;
    case 'warning':
      return theme.palette.warning.main;
    case 'error':
      return theme.palette.error.main;

    default:
      return isBorder ? theme.palette.grey[200] : alpha(theme.palette.grey[700], 0.2);
  }
};

export const RootStyle = styled(Card)(
  ({ theme }) =>
    ({ cardvariant }: { cardvariant?: string }) => ({
      border: `1px solid ${generateStringFromVariant(cardvariant, theme)}`,
      backgroundColor: alpha(theme.palette.grey[100], 0.6),
    }),
);

export const StyledHeader = styled(Stack)(
  ({ theme }) =>
    ({ cardvariant }: { cardvariant?: string }) => ({
      padding: Layout.cardHeaderPadding,
      backgroundColor: theme.palette.grey[50],
      borderBottom: `1px solid ${generateStringFromVariant(cardvariant, theme, true)}`,
      textTransform: 'capitalize',
    }),
);

export const StyledContent = styled(Stack)(({ theme }) => ({
  padding: Layout.cardContentPadding,
  backgroundColor: theme.palette.grey[50],
}));
export const StyledImage = styled('img')(() => ({
  width: '100%',
}));

export const ActionContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  padding: Layout.cardHeaderPadding,
}));

export const StyledFooter = styled(Stack)(
  ({ theme }) =>
    ({ cardvariant }: { cardvariant?: string }) => ({
      padding: Layout.cardFooterPadding,
      backgroundColor: theme.palette.grey[50],
      borderTop: `1px solid ${generateStringFromVariant(cardvariant, theme, true)}`,
    }),
);
