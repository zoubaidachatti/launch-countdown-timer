import { CustomCard } from '@/components';
import { labelVariants } from '@/pages/DashboardPages/ThemePages/TypographiesPage/TypographiesPage.constants';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function TypographiesPage() {
  const { t } = useTranslation();
  return (
    <>
      {labelVariants.map(({ title, exampleText, variants }, lIndex) => (
        <CustomCard key={`label_${lIndex}`} header={title}>
          <Stack spacing={2}>
            {variants.map((variant, vIndex) => (
              <Stack
                key={`variant_${vIndex}`}
                direction="row"
                flexWrap="wrap"
                justifyContent="start"
                rowGap={2}
                columnGap={5}
                alignItems="center"
                minHeight={'50px'}
              >
                <Typography variant="body1" color="primary.main">
                  {'<Typography variant="'}
                  <Stack display={'inline'} component={'span'} color="secondary.light">
                    {variant}
                  </Stack>
                  {'"></Typography>'}
                </Typography>
                <Typography variant={variant}>{t(exampleText, { variant })}</Typography>
              </Stack>
            ))}
          </Stack>
        </CustomCard>
      ))}
    </>
  );
}

export default TypographiesPage;
