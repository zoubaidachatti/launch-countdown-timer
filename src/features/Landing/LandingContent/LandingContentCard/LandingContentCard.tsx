import { RouteIdEnum } from '@/config/enums';
import { openExternalLink } from '@/utils';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  BackCardStyle,
  BackContentStyle,
  ContentStyle,
  FrontCardStyle,
  FrontContentStyle,
  RootStyle,
  StyledButton,
} from './LandingContentCard.style';

export const LandingContentCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onLearnMore = () => {
    if (link) {
      openExternalLink(link, true);
    } else {
      navigate(RouteIdEnum.Dashboard);
    }
  };

  return (
    <RootStyle>
      <ContentStyle id={'content'}>
        <BackCardStyle>
          <BackContentStyle alignItems={'center'} justifyContent={'center'}>
            <Typography textAlign={'center'} variant="h5" fontWeight={700}>
              {t(title)}
            </Typography>
          </BackContentStyle>
        </BackCardStyle>
        <FrontCardStyle>
          <FrontContentStyle spacing={2}>
            <Typography textAlign={'center'} variant="h6" fontWeight={600}>
              {t(description)}
            </Typography>
            <StyledButton onClick={onLearnMore}>{t('common.learn_more')}</StyledButton>
          </FrontContentStyle>
        </FrontCardStyle>
      </ContentStyle>
    </RootStyle>
  );
};

export default LandingContentCard;
