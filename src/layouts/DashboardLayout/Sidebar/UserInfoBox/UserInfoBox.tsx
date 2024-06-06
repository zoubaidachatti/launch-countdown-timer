import MoreIcon from '@/assets/icons/more_vert.svg?react';
import { TypographyOverflow } from '@/components';
import { useAppSelector } from '@/redux/hooks';
import { Avatar, Stack } from '@mui/material';
import { StyledBox } from '../Sidebar.style';
import { SVGBox } from './UserInfoBox.style';

const primaryMain = 'primary.main';

function UserInfoBox() {
  const user = useAppSelector((state) => state.authReducer);
  return (
    <StyledBox padding={'10px 5px'} height={65} position={'relative'} width="100%">
      <SVGBox>
        <MoreIcon />
      </SVGBox>
      <Stack direction={'row'} width={'100%'} alignItems="center" justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: primaryMain }} src={user.photo} />
        <Stack marginLeft={0.75} width={'64%'}>
          <TypographyOverflow
            fontWeight={600}
            fontSize={'0.8rem'}
            title={`${user.firstName} ${user.lastName}`}
          >{`${user.firstName} ${user.lastName}`}</TypographyOverflow>
          <TypographyOverflow title={user.email} fontSize={'0.7rem'}>
            {user.email}
          </TypographyOverflow>
        </Stack>
      </Stack>
    </StyledBox>
  );
}

export default UserInfoBox;
