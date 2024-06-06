import EmailIcon from '@/assets/icons/inbox.svg?react';
import CartIcon from '@/assets/icons/shopping_cart.svg?react';
import { CustomCard } from '@/components';
import { BadgeVariants, PaletteVariants } from '@/types/interfaces';
import { Badge, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { badgeAlignments, badgeColors, badgeVariants } from './BadgePage.constants';
import { StyledIconButton } from './BadgePage.style';

export const BadgePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header="badge.basic_badge">
        <Stack direction={'column'} spacing={2}>
          <Typography color="primary.main" fontWeight={700}>
            {t('common.colors')}
          </Typography>
          <Stack spacing={1.5}>
            {badgeColors.map(({ label, id, color, count }) => (
              <Grid key={id} container spacing={0.5} alignItems={'center'}>
                <Grid item xs={12} sm={3} md={2}>
                  <Typography color={`${color}.main`}>{t(label)}</Typography>
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                  <StyledIconButton>
                    <Badge badgeContent={count} color={color as PaletteVariants}>
                      <EmailIcon />
                    </Badge>
                  </StyledIconButton>
                </Grid>
              </Grid>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Grid container spacing={0.5} alignItems={'center'}>
              <Grid item xs={12} sm={3} md={2}>
                <Typography fontWeight={700}>{t('badge.max_count')}</Typography>
              </Grid>
              <Grid item xs={12} sm={9} md={10}>
                <StyledIconButton>
                  <Badge badgeContent={520} color={'primary'} max={99}>
                    <EmailIcon />
                  </Badge>
                </StyledIconButton>
              </Grid>
            </Grid>
          </Stack>
          <Typography color="primary.main" fontWeight={700}>
            {t('common.variants')}
          </Typography>
          <Stack spacing={1.5}>
            {badgeVariants.map(({ label, id, variant, count }) => (
              <Grid key={id} container spacing={0.5} alignItems={'center'}>
                <Grid item xs={6} sm={3} md={2}>
                  <Typography>{t(label)}</Typography>
                </Grid>
                <Grid item xs={6} sm={9} md={10}>
                  <StyledIconButton>
                    <Badge badgeContent={count} variant={variant as BadgeVariants} color="primary">
                      <CartIcon />
                    </Badge>
                  </StyledIconButton>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header="badge.badge_position">
        <Stack spacing={1.5}>
          {badgeAlignments.map(({ label, id, count, horizontal, vertical }) => (
            <Grid key={id} container spacing={0.5} alignItems={'center'}>
              <Grid item xs={6} sm={3} md={2}>
                <Typography>{t(label)}</Typography>
              </Grid>
              <Grid item xs={6} sm={9} md={10}>
                <StyledIconButton>
                  <Badge
                    badgeContent={count}
                    color="primary"
                    anchorOrigin={{
                      vertical,
                      horizontal,
                    }}
                  >
                    <CartIcon />
                  </Badge>
                </StyledIconButton>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
};

export default BadgePage;
