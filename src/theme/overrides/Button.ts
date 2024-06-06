import { ColorsConfig, Layout } from '@/config/constants';
import { PaletteVariants } from '@/types/interfaces';
import { Theme } from '@mui/material';

const generateDisabledContainedButtonStyle = (theme: Theme, variant: PaletteVariants) => {
  return {
    ':disabled': {
      backgroundColor: theme.palette[variant].main,
      color: ColorsConfig.grey[100],
      opacity: 0.5,
    },
    svg: {
      fill: ColorsConfig.grey[100],
      width: 20,
      height: 20,
    },
  };
};
const generateDisabledOutlinedButtonStyle = (
  theme: Theme,
  variant: PaletteVariants,
  isText?: boolean,
) => {
  return {
    ':disabled': {
      backgroundColor: 'transparent',
      borderColor: isText ? undefined : theme.palette[variant].main,
      opacity: 0.5,
      color: theme.palette[variant].main,
    },
    svg: {
      fill: theme.palette[variant].main,
      width: 20,
      height: 20,
    },
  };
};

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: Layout.borderRadius,
          boxShadow: theme.shadows[1],
        },
        text: { boxShadow: 'none' },
        contained: {
          color: ColorsConfig.grey[100],
        },
        // contained
        containedPrimary: {
          ...generateDisabledContainedButtonStyle(theme, 'primary'),
        },
        containedSecondary: {
          ...generateDisabledContainedButtonStyle(theme, 'secondary'),
        },
        containedInfo: {
          ...generateDisabledContainedButtonStyle(theme, 'info'),
        },
        containedWarning: {
          ...generateDisabledContainedButtonStyle(theme, 'warning'),
        },
        containedError: {
          ...generateDisabledContainedButtonStyle(theme, 'error'),
        },
        containedSuccess: {
          ...generateDisabledContainedButtonStyle(theme, 'success'),
        },
        // outlined
        outlinedPrimary: {
          ...generateDisabledOutlinedButtonStyle(theme, 'primary'),
        },
        outlinedSecondary: {
          ...generateDisabledOutlinedButtonStyle(theme, 'secondary'),
        },
        outlinedInfo: {
          ...generateDisabledOutlinedButtonStyle(theme, 'info'),
        },
        outlinedWarning: {
          ...generateDisabledOutlinedButtonStyle(theme, 'warning'),
        },
        outlinedError: {
          ...generateDisabledOutlinedButtonStyle(theme, 'error'),
        },
        outlinedSuccess: {
          ...generateDisabledOutlinedButtonStyle(theme, 'success'),
        }, // text
        textPrimary: {
          ...generateDisabledOutlinedButtonStyle(theme, 'primary', true),
        },
        textSecondary: {
          ...generateDisabledOutlinedButtonStyle(theme, 'secondary', true),
        },
        textInfo: {
          ...generateDisabledOutlinedButtonStyle(theme, 'info', true),
        },
        textWarning: {
          ...generateDisabledOutlinedButtonStyle(theme, 'warning', true),
        },
        textError: {
          ...generateDisabledOutlinedButtonStyle(theme, 'error', true),
        },
        textSuccess: {
          ...generateDisabledOutlinedButtonStyle(theme, 'success', true),
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  };
}
