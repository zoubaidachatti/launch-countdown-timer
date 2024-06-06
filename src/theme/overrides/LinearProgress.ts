import { Layout } from '@/config/constants';

export default function LinearProgress() {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: Layout.borderRadius,
        },
        bar2Buffer: {
          borderRadius: Layout.borderRadius,
        },
        bar: {
          borderRadius: Layout.borderRadius,
        },
      },
    },
  };
}
