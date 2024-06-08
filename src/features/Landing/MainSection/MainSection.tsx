import ImageDesktop from '@/assets/image-web-3-desktop.jpg';
import ImageMobile from '@/assets/image-web-3-mobile.jpg';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StyledButton } from './MainSection.style';
import { news } from './MainSection.constants';

export const MainSection = () => {
  const { t } = useTranslation();
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
      {/* left */}
      <Stack spacing={4} width={{ xs: '100%', md: '60%' }}>
        <Stack display={{ xs: 'none', md: 'flex' }}>
          <img src={ImageDesktop} style={{ width: '100%', height: '100%' }} />
        </Stack>
        <Stack display={{ xs: 'flex', md: 'none' }}>
          <img src={ImageMobile} style={{ width: '100%', height: '100%' }} />
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={'space-between'}
          alignItems={'start'}
          width="100%"
          spacing={{ xs: 2, md: 4 }}
        >
          <Stack maxWidth={{ xs: '100%', md: '50%' }}>
            <Typography
              color={'grey.900'}
              variant="h1"
              fontSize={{ xs: '2rem', md: '3.5rem' }}
              lineHeight={{ md: '3.5rem', xs: '2rem' }}
            >
              {t('content.bright_future_title')}
            </Typography>
          </Stack>
          <Stack
            direction={'column'}
            justifyContent={'space-between'}
            width={{ xs: '100%', md: '70%' }}
            alignItems={'start'}
            height={'100%'}
            spacing={2}
          >
            <Typography variant="body1">{t('content.bright_future_description')}</Typography>
            <StyledButton>{t('content.read_more')}</StyledButton>
          </Stack>
        </Stack>
      </Stack>
      {/* right */}
      <Stack
        paddingInline={3}
        paddingBlock={4}
        bgcolor={'grey.900'}
        width={{ xs: '100%', md: 'calc(100% - 60% - 24px)' }}
        spacing={1.5}
      >
        <Typography color={'primary.main'} variant="h2">
          {t('content.new')}
        </Typography>
        <Stack justifyContent={'space-evenly'} height={'100%'}>
          {news.map(({ title, description }, index) => (
            <Stack
              borderBottom={index !== news.length - 1 ? '1px solid' : 'none'}
              key={`new_${index}`}
              spacing={1}
              paddingBlock={2}
            >
              <Typography color="grey.50" variant="h4">
                {t(title)}
              </Typography>
              <Typography variant="body1">{t(description)}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainSection;
