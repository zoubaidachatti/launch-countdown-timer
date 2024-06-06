import { Avatar, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Testimony = ({
  testimony,
  user,
}: {
  testimony: string;
  user: {
    name: string;
    photo: string;
    job: string;
  };
}) => {
  const { t } = useTranslation();
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'start'}
      width={{ xs: '100%', md: 'calc((100% / 3) - 1.5rem)' }}
      height={{ xs: undefined, md: 350 }}
    >
      <Avatar
        sx={{ width: 63, height: 63, marginBottom: '2.5rem' }}
        src={user.photo}
        alt={user.name}
      />
      <Stack
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'calc(100% - 63px - 2.5rem)'}
      >
        <Typography
          textAlign={'center'}
          color={'info.main'}
          variant="body1"
          marginBottom={'2.5rem'}
        >
          {t(testimony)}
        </Typography>
        <Stack>
          <Typography variant="h4" textAlign={'center'} color={'grey.900'} marginBottom={'.5rem'}>
            {t(user.name)}
          </Typography>
          <Typography fontSize={'0.8rem'} color={'info.main'} textAlign={'center'}>
            {t(user.job)}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimony;
