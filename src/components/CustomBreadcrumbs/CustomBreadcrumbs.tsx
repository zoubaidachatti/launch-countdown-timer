import ArrowRight from '@/assets/icons/chevron_right.svg?react';
import { BreadcrumbsVariants } from '@/config/enums';
import { useTranslation } from 'react-i18next';
import { RootStyle, StyledLink } from './CustomBreadcrumbs.style';
import { CustomBreadcrumbsProps } from './CustomBreadcrumbs.type';
import { Box } from '@mui/material';

export const CustomBreadcrumbs = ({
  links,
  variant,
  maxItems,
  separator,
  breadcrumbComponent: BreadcrumbComponent,
}: CustomBreadcrumbsProps) => {
  const { t } = useTranslation();
  return (
    <RootStyle
      maxItems={maxItems}
      separator={
        separator ??
        (variant === BreadcrumbsVariants.Routes ? <Box marginInline={1}>/</Box> : <ArrowRight />)
      }
      aria-label="breadcrumb"
    >
      {links.map(({ id, order, label, path, icon }) =>
        BreadcrumbComponent ? (
          <BreadcrumbComponent key={id}>
            <StyledLink to={path} isselected={`${order === links.length - 1}`}>
              {icon ? icon : null}
              {t(label)}
            </StyledLink>
          </BreadcrumbComponent>
        ) : (
          <StyledLink key={id} to={path} isselected={`${order === links.length - 1}`}>
            {icon ? icon : null}
            {t(label)}
          </StyledLink>
        ),
      )}
    </RootStyle>
  );
};
