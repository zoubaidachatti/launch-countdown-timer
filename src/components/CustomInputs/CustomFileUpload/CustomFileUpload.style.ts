import { TypographyOverflow } from '@/components/Typography/TypographyOverflow/TypographyOverflow';
import { Layout } from '@/config/constants';
import { Stack, SxProps, alpha, styled } from '@mui/material';

type InputContainerProps = {
  haserror?: string;
  isdragging?: string;
  isreadonly?: string;
  isdisabled?: string;
};

export const StyledInput = styled('input')(() => ({
  width: 0,
  height: 0,
  visibility: 'hidden',
}));

export const PreviewsContainer = styled(Stack)(
  ({ theme }) =>
    ({ haserror, isdragging, isreadonly, isdisabled }: InputContainerProps) => ({
      width: 200,
      height: 100,
      opacity: isdisabled === `${true}` ? 0.6 : undefined,
      overflow: 'hidden',
      svg: {
        fill: isdisabled === `${true}` ? `${theme.palette.text.primary} !important` : undefined,
        cursor: isdisabled === `${true}` ? 'default' : undefined,
      },
      backgroundColor: isreadonly === `${true}` ? theme.palette.grey[200] : theme.palette.grey[50],
      cursor: isdisabled === `${true}` ? 'default' : 'pointer',
      position: 'relative',
      borderRadius: Layout.borderRadius,
      borderWidth: 1,
      borderStyle: isdragging === `${true}` ? 'dashed' : 'solid',

      borderColor:
        haserror === `${true}`
          ? theme.palette.error.main
          : isdisabled === `${true}`
            ? theme.palette.action.disabled
            : theme.palette.grey[400],

      ':hover': {
        borderColor:
          isdisabled === `${true}` ? theme.palette.action.disabled : theme.palette.primary.main,
      },
    }),
);

export const SVGBox = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  svg: {
    fill: theme.palette.primary.main,
    width: 40,
    height: 40,
    cursor: 'pointer',
  },
}));

export const DeleteIconContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  right: 4,
  padding: 2,
  borderRadius: Layout.borderRadius,
  backgroundColor: alpha(theme.palette.error.main, 0.12),
  svg: {
    fill: theme.palette.error.main,
    width: 15,
    height: 15,
  },
}));
export const imageSx: SxProps = {
  objectFit: 'fill',
  borderRadius: Layout.borderRadius + 'px',
  width: '100%',
};
export const StyledFileName = styled(TypographyOverflow)(
  ({ theme }) =>
    ({ haserror }: { haserror?: string }) => ({
      color: haserror === `${true}` ? theme.palette.error.main : theme.palette.grey[400],
      fontSize: '0.75rem',
      fontStyle: 'italic',
      fontWeight: 600,
      marginLeft: '5px !important',
    }),
);
