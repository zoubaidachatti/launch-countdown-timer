import CloseIcon from '@/assets/icons/close.svg?react';
import { ToastType } from '@/types/interfaces';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TypographyOverflow } from '../Typography';
import { CloseIconContainer, ContainerStyle, RootStyle } from './Toast.style';

export const Toast = (props: ToastType) => {
  const { title, message, type, variant, customContent, onClick, onClose } = props;
  const { t } = useTranslation();
  return (
    <RootStyle variant={variant ?? 'standard'} onClick={onClick}>
      <ContainerStyle variant={variant ?? 'standard'} type={type ?? 'primary'}>
        {customContent ? (
          customContent(props)
        ) : (
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Stack direction={'column'} spacing={0.75}>
              {title && (
                <TypographyOverflow fontWeight={600} variant="h6">
                  {t(title)}
                </TypographyOverflow>
              )}
              <TypographyOverflow>{t(message)}</TypographyOverflow>
            </Stack>
          </Stack>
        )}
        {onClose && (
          <CloseIconContainer
            variant={variant ?? 'standard'}
            type={type ?? 'primary'}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <CloseIcon />
          </CloseIconContainer>
        )}
      </ContainerStyle>
    </RootStyle>
  );
};

export default Toast;
