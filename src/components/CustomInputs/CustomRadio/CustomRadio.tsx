import { SizeType } from '@/types/interfaces';
import { Radio, RadioProps } from '@mui/material';
import { CheckedRadioStyle, CheckedRootStyle, RootStyle } from './CustomRadio.style';

type CustomRadioProps = {
  customsize?: SizeType;
} & RadioProps;

export function CustomRadio(props: CustomRadioProps) {
  const width = props.customsize === 'large' ? 25 : props.customsize === 'small' ? 15 : 18;
  const height = props.customsize === 'large' ? 25 : props.customsize === 'small' ? 15 : 18;

  const widthChecked = props.customsize === 'large' ? 15 : props.customsize === 'small' ? 7 : 10;
  const heightChecked = props.customsize === 'large' ? 15 : props.customsize === 'small' ? 7 : 10;

  return (
    <Radio
      icon={<RootStyle width={width} height={height} />}
      checkedIcon={
        <CheckedRootStyle width={width} height={height}>
          <CheckedRadioStyle width={widthChecked} height={heightChecked} />
        </CheckedRootStyle>
      }
      {...props}
    />
  );
}
