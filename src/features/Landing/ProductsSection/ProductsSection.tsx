import { Stack, Typography, alpha } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { products } from './ProductsSection.constants';
import { Layout } from '@/config/constants';

export const ProductsSection = () => {
  const { t } = useTranslation();
  return (
    <Stack gap={'1.5rem'} direction={{ md: 'row', xs: 'column' }} flexWrap={'wrap'}>
      {products.map(({ title, description, src }, index) => (
        <Stack
          direction={'row'}
          paddingBlock={2}
          spacing={2.5}
          key={`product_${index}`}
          width={{ xs: '100%', sm: 'calc((100% / 2) - 1.5rem)', md: 'calc((100% / 3) - 1.5rem)' }}
          minWidth={{ xs: '100%', md: 300 }}
          sx={{
            cursor: 'pointer',
            transition: Layout.transition,
            ':hover': {
              backgroundColor: (th) => alpha(th.palette.primary.main, 0.3),
            },
          }}
        >
          <Stack
            width={{ xs: 90, sm: 94 }}
            minWidth={100}
            maxHeight={{ xs: 'none', md: 200 }}
            sx={{ aspectRatio: '1 / 1.4' }}
          >
            <img src={src} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Stack>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              fontSize={'2rem'}
              color={'secondary.main'}
            >{`0${index + 1}`}</Typography>
            <Typography variant="h4" color={'grey.900'}>
              {t(title)}
            </Typography>
            <Typography>{t(description)}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default ProductsSection;
