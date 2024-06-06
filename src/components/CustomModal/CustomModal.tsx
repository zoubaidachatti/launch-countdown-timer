import CloseIcon from '@/assets/icons/close.svg?react';
import { Backdrop, Box, Dialog, Fade, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SVGContainer } from '../SVGContainer/SVGContainer.style';
import { CustomModalProps } from './CustomModal.type';

export const CustomModal = ({ open, children, title, handleClose }: CustomModalProps) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Stack>
          {(title || handleClose) && (
            <Stack
              p={'9px'}
              direction={'row'}
              justifyContent="space-between"
              borderBottom={(th) => `1px solid ${th.palette.grey[200]}`}
            >
              {title ? (
                <Typography textAlign={'center'} color="primary.main" variant="h5">
                  {t(title)}
                </Typography>
              ) : (
                <Box />
              )}
              {handleClose && (
                <Stack alignItems={'flex-end'}>
                  <SVGContainer onClick={handleClose}>
                    <CloseIcon />
                  </SVGContainer>
                </Stack>
              )}
            </Stack>
          )}
          <Stack p={'9px'}>{children}</Stack>
        </Stack>
      </Fade>
    </Dialog>
  );
};
