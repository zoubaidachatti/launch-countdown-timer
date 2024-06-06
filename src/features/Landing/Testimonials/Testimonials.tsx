import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { testimonials } from './Testimonials.constants';
import Testimony from './Testimony/Testimony';

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <Stack paddingInline={'4rem'} paddingBlock={'6rem'}>
      <Typography
        marginBottom={'3rem'}
        textAlign={'center'}
        letterSpacing={'.3rem'}
        fontSize={'1.125rem'}
        variant="h3"
      >
        {t('content.client_testimonials')}
      </Typography>
      <Stack direction={'row'} gap={'1.5rem'} flexWrap={'wrap'}>
        {testimonials.map((testimony, index) => (
          <Testimony {...testimony} key={`testimony_${index}`} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Testimonials;
