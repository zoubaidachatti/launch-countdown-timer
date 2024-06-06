import { PaletteVariants, ToastVariants } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';
import { ToastPosition } from 'react-hot-toast';

const uniqueIds = generateUniqueIds(15);

export const SimpleToast = {
  message: 'toast.toast_example',
  title: 'toast.toast_title',
};

export const toastVariants: { id: number; label: string; variant: ToastVariants }[] = [
  {
    label: 'toast.create_standard_toast',
    id: uniqueIds[0],
    variant: 'standard',
  },
  {
    label: 'toast.create_filled_toast',
    id: uniqueIds[1],
    variant: 'filled',
  },
  {
    label: 'toast.create_outlined_toast',
    id: uniqueIds[2],
    variant: 'outlined',
  },
];

export const toastTypes: { id: number; label: string; type: PaletteVariants }[] = [
  {
    label: 'toast.create_primary_toast',
    id: uniqueIds[3],
    type: 'primary',
  },
  {
    label: 'toast.create_secondary_toast',
    id: uniqueIds[4],
    type: 'secondary',
  },
  {
    label: 'toast.create_info_toast',
    id: uniqueIds[5],
    type: 'info',
  },
  {
    label: 'toast.create_success_toast',
    id: uniqueIds[6],
    type: 'success',
  },
  {
    label: 'toast.create_warning_toast',
    id: uniqueIds[7],
    type: 'warning',
  },
  {
    label: 'toast.create_error_toast',
    id: uniqueIds[8],
    type: 'error',
  },
];

export const toastPositions: { id: number; label: string; position: ToastPosition }[] = [
  {
    label: 'toast.bottom_center',
    id: uniqueIds[9],
    position: 'bottom-center',
  },
  {
    label: 'toast.bottom_left',
    id: uniqueIds[10],
    position: 'bottom-left',
  },
  {
    label: 'toast.bottom_right',
    id: uniqueIds[11],
    position: 'bottom-right',
  },
  {
    label: 'toast.top_center',
    id: uniqueIds[12],
    position: 'top-center',
  },
  {
    label: 'toast.top_left',
    id: uniqueIds[13],
    position: 'top-left',
  },
  {
    label: 'toast.top_right',
    id: uniqueIds[14],
    position: 'top-right',
  },
];
