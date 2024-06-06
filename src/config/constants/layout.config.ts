import { alpha } from '@mui/material';

export const Layout = {
  borderRadius: 0,
  checkboxBorderRadius: 0,
  inputRadius: 0,
  inputPadding: 11,
  inputFocusBorderWidth: '1px',
  padding: '30px 3%',
  sidebarItemsPadding: '7px',
  cardHeaderPadding: '10px 15px',
  cardContentPadding: '10px 15px',
  cardFooterPadding: '7px 15px',
  tabsPadding: '5px 14px',
  tabsHeight: '30px',
  breadcrumbPadding: '0',
  pageSpacing: '14px',
  transition: 'all 0.5s ease',
  linearGradient: (dark: string, main: string, light: string) =>
    `linear-gradient(140deg, ${dark} -37%, ${main} 41%, ${light} 79%)`,
  landingPageGradient: (dark: string, light: string) =>
    `radial-gradient(circle, ${light} 0%, ${dark} 100%)`,
  highlightedBgColor: (color: string) => alpha(color, 0.2),
};
