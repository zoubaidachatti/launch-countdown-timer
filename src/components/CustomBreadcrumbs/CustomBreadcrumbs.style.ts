import { Layout } from '@/config/constants';
import { Breadcrumbs, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(({ theme }) => ({ isselected }: { isselected: string }) => ({
  borderRadius: Layout.borderRadius,
  padding: Layout.breadcrumbPadding,
  backgroundColor: 'transparent',
  textDecoration: 'none',
  fontWeight: isselected === `${true}` ? 600 : undefined,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
}));

export const RootStyle = styled(Breadcrumbs)(({ theme }) => ({
  ol: {
    gap: 3,
  },
  '& .MuiBreadcrumbs-separator': {
    marginLeft: 0,
    marginRight: 0,
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  svg: {
    fill: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
}));
