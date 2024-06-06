import { CustomCard, Toast } from '@/components';
import { GlobalVariables } from '@/config/constants';
import { PaletteVariants, ToastType, ToastVariants } from '@/types/interfaces';
import { Button, Stack } from '@mui/material';
import toast, { ToastPosition } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { SimpleToast, toastPositions, toastTypes, toastVariants } from './ToastPage.constants';

export const ToastPage = () => {
  const { t } = useTranslation();

  const CustomToast = (customToast: ToastType) => (
    <Stack direction={'row'} spacing={1} width={350} height={100} alignItems={'center'}>
      <Stack width="50px" fontSize={'2.5rem'}>
        🐸
      </Stack>
      {customToast.title && <Stack fontSize={'2.5rem'}>{t(customToast.title)}</Stack>}
    </Stack>
  );

  const createToast = (
    variant: ToastVariants = 'standard',
    type: PaletteVariants = 'primary',
    position: ToastPosition = 'bottom-right',
    isCustom = false,
  ) => {
    toast(
      (toastObject) => (
        <Toast
          {...SimpleToast}
          variant={variant}
          type={type}
          onClose={() => toast.dismiss(toastObject.id)}
          customContent={isCustom ? CustomToast : undefined}
        />
      ),
      {
        position,
        duration: GlobalVariables.alerts.defaultDuration,
      },
    );
  };

  return (
    <>
      <CustomCard header="toast.basic_toast">
        <Stack alignItems={'center'}>
          <Button variant="contained" onClick={() => createToast()}>
            {t('toast.create_toast')}
          </Button>
        </Stack>
      </CustomCard>
      <CustomCard header="toast.toast_variants">
        <Stack
          alignItems={'center'}
          gap={1}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          {toastVariants.map(({ id, label, variant }) => (
            <Button key={id} variant="contained" onClick={() => createToast(variant)}>
              {t(label)}
            </Button>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="toast.toast_types">
        <Stack
          alignItems={'center'}
          gap={1}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          {toastTypes.map(({ id, label, type }) => (
            <Button key={id} variant="contained" onClick={() => createToast('standard', type)}>
              {t(label)}
            </Button>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="toast.toast_positions">
        <Stack
          alignItems={'center'}
          gap={1}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          {toastPositions.map(({ id, label, position }) => (
            <Button
              key={id}
              variant="contained"
              onClick={() => createToast('standard', 'info', position)}
            >
              {t(label)}
            </Button>
          ))}
        </Stack>
      </CustomCard>
      <CustomCard header="toast.custom_toast">
        <Stack alignItems={'center'}>
          <Button
            variant="contained"
            onClick={() => createToast('standard', 'primary', 'bottom-center', true)}
          >
            {t('toast.create_custom_toast')}
          </Button>
        </Stack>
      </CustomCard>
    </>
  );
};

export default ToastPage;
