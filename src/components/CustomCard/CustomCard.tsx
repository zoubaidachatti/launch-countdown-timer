import { generateUniqueIds } from '@/utils/helpers';
import { Button, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActionContainer,
  RootStyle,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledImage,
} from './CustomCard.style';
import { CustomCardProps } from './CustomCard.type';

export function CustomCard({
  header,
  children,
  image,
  footer,
  cardActions,
  cardActionsPlacement,
  contentAlignment,
  variant,
  headerSx,
  imageSx,
  contentSx,
  footerSx,
}: CustomCardProps) {
  const { t } = useTranslation();

  const uniqueActionsIds = useMemo(
    () => (cardActions ? generateUniqueIds(cardActions.length) : []),
    [cardActions?.length],
  );

  return (
    <RootStyle cardvariant={variant}>
      {header && (
        <StyledHeader
          cardvariant={variant}
          sx={{ ...headerSx }}
          color={variant ? `${variant}.main` : undefined}
        >
          {typeof header === 'string' ? <Typography variant="h6">{t(header)}</Typography> : header}
        </StyledHeader>
      )}
      {image && <StyledImage sx={{ ...imageSx }} alt={t('card.card_image')} src={image} />}
      <StyledContent sx={{ ...contentSx }} alignItems={contentAlignment}>
        {children}
      </StyledContent>
      {cardActions && (
        <ActionContainer
          direction={'row'}
          flexWrap={'wrap'}
          gap={'0.5rem'}
          justifyContent={cardActionsPlacement ?? 'end'}
        >
          {cardActions.map(({ action, label, variant: btnVariant, color }, ind) => (
            <Button color={color} variant={btnVariant} key={uniqueActionsIds[ind]} onClick={action}>
              {t(label)}
            </Button>
          ))}
        </ActionContainer>
      )}
      {footer && (
        <StyledFooter
          cardvariant={variant}
          sx={{ ...footerSx }}
          color={variant ? `${variant}.main` : undefined}
        >
          {typeof footer === 'string' ? (
            <Typography variant="body2">{t(footer)}</Typography>
          ) : (
            footer
          )}
        </StyledFooter>
      )}
    </RootStyle>
  );
}
