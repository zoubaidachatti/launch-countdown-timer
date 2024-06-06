import { Tab, Tabs, styled } from '@mui/material';

export const UnderlinedTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.grey[700],
  '& .MuiTabs-flexContainer': {
    borderBottom: `0.125rem solid ${theme.palette.grey[300]}`,
  },
  '&:hover': {
    borderBottomWidth: `0.125rem`,
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.grey[100],
    borderBottom: `0.125rem solid ${theme.palette.primary.main} !important`,
    borderRadius: 0,
    border: 0,
    height: '100%',
  },
}));

export const UnderlinedTab = styled(Tab)(() => () => ({
  borderRadius: 0,
  margin: 0,
}));
