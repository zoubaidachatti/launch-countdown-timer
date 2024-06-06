import { CustomCard } from '@/components';
import { Avatar, Stack, Typography } from '@mui/material';
import { AvatarStyle, BannerStyle, StyledContent } from './ProfileBox.style';
import { useAppSelector } from '@/redux/hooks';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '@/utils';

export const ProfileBox = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.authReducer);

  const NumberContainer = ({ label, value }: { label: string; value?: number }) =>
    value && (
      <Stack alignItems={'center'} direction={'column'}>
        <Typography color={'grey.800'} fontWeight={600}>
          {formatNumber(value)}
        </Typography>
        <Typography color="grey.400" fontSize={'0.75rem'}>
          {t(label)}
        </Typography>
      </Stack>
    );

  return (
    <CustomCard contentSx={{ padding: '15px' }}>
      <Stack position={'relative'} height={240}>
        <BannerStyle />
        <StyledContent spacing={1}>
          <AvatarStyle>
            <Avatar alt={user.firstName} src={user.photo} variant="circular" />
          </AvatarStyle>
          <Stack alignItems={'center'}>
            <Typography
              color={'grey.800'}
              variant="h5"
              fontWeight={600}
            >{`${user.firstName} ${user.lastName}`}</Typography>
            <Typography color="grey.400" fontSize={'0.75rem'}>
              {user.jobType}
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={3}>
            <NumberContainer label="profile.posts" value={user.numberOfPosts} />
            <NumberContainer label="profile.followers" value={user.numberOfFollowers} />
            <NumberContainer label="profile.following" value={user.numberOfFollowing} />
          </Stack>
        </StyledContent>
      </Stack>
    </CustomCard>
  );
};
