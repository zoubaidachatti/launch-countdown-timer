import CopyIcon from '@/assets/icons/content_copy.svg?react';
import DoneIcon from '@/assets/icons/done.svg?react';
import { CustomDivider } from '@/components';
import { copyToClipboard } from '@/utils';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBox } from './ColorItem.style';
import { ColorItemProps } from './ColorItem.type';

export const ColorItem = ({ label, hex, rgb, isDark }: ColorItemProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 7000);
    }
  }, [copied]);

  const copyHEX = () => {
    copyToClipboard(hex, () => setCopied(true));
  };

  return (
    <Stack spacing={1}>
      <StyledBox
        bgcolor={hex}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={copyHEX}
        isdark={`${isDark}`}
      >
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          direction={'row'}
          width={'inherit'}
          height={'inherit'}
          sx={{ opacity: isHovered ? 1 : 0, transition: 'opacity 200ms  ease-out' }}
        >
          {copied ? <DoneIcon /> : <CopyIcon />}
          {t(`common.${copied ? 'copied' : 'copy'}`)}
        </Stack>
      </StyledBox>
      <Typography variant="h6" textAlign={'center'}>
        {t(label)}
      </Typography>
      <Stack spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography fontSize={'0.9rem'}>{t('colors.HEX')}</Typography>
          <Typography variant="body2" color={'text.disabled'}>
            {hex.toUpperCase()}
          </Typography>
        </Stack>
        <CustomDivider orientation="horizontal" width="1px" color="grey.300" />
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography fontSize={'0.9rem'}>{t('colors.RGB')}</Typography>
          <Typography variant="body2" color={'text.disabled'}>
            {rgb}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ColorItem;
