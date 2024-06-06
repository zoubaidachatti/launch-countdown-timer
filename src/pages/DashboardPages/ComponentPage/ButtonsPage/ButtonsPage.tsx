import { CustomCard } from '@/components';
import { ButtonVariants, OrientationType, PaletteVariants, SizeType } from '@/types/interfaces';
import { Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  buttonGroupOrientations,
  buttonGroups,
  buttonSizes,
  buttonTypes,
  buttonVariants,
  buttons,
} from './ButtonsPage.constants';

export function ButtonsPage() {
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header={'button.buttons'}>
        <Stack spacing={1}>
          {buttonTypes.map((buttonType) => (
            <Grid container key={buttonType.id} spacing={0.5}>
              <Grid item xs={12} md={3}>
                <Typography textAlign={'center'}>{t(buttonType.label)}</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Stack
                  direction={'row'}
                  gap={0.5}
                  flexWrap={'wrap'}
                  justifyContent={{ xs: 'center', md: 'start' }}
                >
                  {buttons.map((button) => (
                    <Stack key={button.id + buttonType.id} minWidth={110}>
                      <Button
                        color={button.color as PaletteVariants}
                        disabled={buttonType.disabled}
                        variant="contained"
                      >
                        {t(button.label)}
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      {/* Buttons with icons */}
      <CustomCard header={'button.button_with_icons'}>
        <Stack spacing={1}>
          {buttonTypes.map((buttonType) => (
            <Grid container key={buttonType.id} spacing={0.5}>
              <Grid item xs={12} md={3}>
                <Typography textAlign={'center'}>{t(buttonType.label)}</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Stack
                  direction={'row'}
                  gap={0.5}
                  flexWrap={'wrap'}
                  justifyContent={{ xs: 'center', md: 'start' }}
                >
                  {buttons.map((button) => (
                    <Stack key={button.id + buttonType.id}>
                      <Button
                        color={button.color as PaletteVariants}
                        disabled={buttonType.disabled}
                        variant="contained"
                        startIcon={button.icon}
                      >
                        {t(button.label)}
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      {/* Button variants */}
      <CustomCard header={'button.button_variants'}>
        <Stack spacing={1}>
          {buttonTypes.map((buttonType) => (
            <Grid container key={buttonType.label} spacing={0.5}>
              <Grid item xs={12} md={3}>
                <Typography textAlign={'center'}>{t(buttonType.label)}</Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Stack direction={'column'} gap={1}>
                  {buttonVariants.map((buttonVariant) => (
                    <Stack
                      key={buttonVariant.id}
                      direction={'row'}
                      gap={0.5}
                      flexWrap={'wrap'}
                      justifyContent={{ xs: 'center', md: 'start' }}
                    >
                      {buttons.map((button) => (
                        <Stack key={button.id} minWidth={110}>
                          <Button
                            color={button.color as PaletteVariants}
                            disabled={buttonType.disabled}
                            variant={buttonVariant.variant as ButtonVariants}
                          >
                            {t(`common.${buttonVariant.variant}`)}
                          </Button>
                        </Stack>
                      ))}
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </CustomCard>
      {/* Button sizes */}
      <CustomCard header={'button.button_sizes'}>
        <Stack gap={2} direction={'row'} flexWrap={'wrap'} minHeight={100} alignItems="center">
          {buttonSizes.map((buttonSize) => (
            <Stack key={buttonSize.id} spacing={1}>
              <Typography>{t(buttonSize.label)}</Typography>
              <Stack spacing={1} direction={'row'}>
                {buttonVariants.map((buttonVariant) => (
                  <Stack key={buttonVariant.id + buttonSize.id}>
                    <Button
                      size={buttonSize.size as SizeType}
                      variant={buttonVariant.variant as ButtonVariants}
                    >
                      {t(`common.${buttonVariant.variant}`)}
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
      {/* Button group */}
      <CustomCard header={'button.buttons_group'}>
        <Stack spacing={2}>
          {buttonGroupOrientations.map((buttonGroupOrientation) => (
            <Stack spacing={1} key={buttonGroupOrientation.id}>
              <Typography variant="h4">{t(buttonGroupOrientation.label)}</Typography>
              <Stack
                gap={2}
                direction={'row'}
                flexWrap={'wrap'}
                minHeight={100}
                alignItems="flex-start"
              >
                {buttonGroups.map((buttonGroup) => (
                  <Stack spacing={1} key={buttonGroup.id}>
                    <Typography>{t(buttonGroup.label)}</Typography>
                    <ButtonGroup
                      orientation={buttonGroupOrientation.orientation as OrientationType}
                      variant={buttonGroup.variant as ButtonVariants}
                    >
                      <Button>{t('common.one')}</Button>
                      <Button>{t('common.two')}</Button>
                      <Button disabled>{t('common.disabled')}</Button>
                    </ButtonGroup>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CustomCard>
    </>
  );
}

export default ButtonsPage;
