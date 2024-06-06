import { Layout } from '@/config/constants';

export default function Paper() {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: Layout.borderRadius,
        },
      },
    },
  };
}
