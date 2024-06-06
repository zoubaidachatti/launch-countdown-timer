import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IconContainerStyle } from '../SidebarSection.style';
import { RootStyle } from './SectionItems.style';

const SectionItems = ({
  label,
  path,
  icon,
  isActive,
}: {
  path: string;
  label: string;
  isActive: boolean;
  icon: ReactNode;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(path);
  };

  return (
    <RootStyle
      isactive={`${isActive}`}
      onClick={onClick}
      direction={'row'}
      spacing={1}
      alignItems={'center'}
    >
      <IconContainerStyle>{icon}</IconContainerStyle>
      <Typography fontSize={'0.85rem'}>{t(label)}</Typography>
    </RootStyle>
  );
};

export default SectionItems;
