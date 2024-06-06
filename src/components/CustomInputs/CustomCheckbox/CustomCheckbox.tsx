import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { CheckedBoxStyle, CheckedRootStyle, RootStyle } from './CustomCheckbox.style';

export function CustomCheckBox(props: CheckboxProps) {
  const width = props.size === 'large' ? 25 : props.size === 'small' ? 15 : 18;
  const height = props.size === 'large' ? 25 : props.size === 'small' ? 15 : 18;

  const widthChecked = props.size === 'large' ? 15 : props.size === 'small' ? 7 : 10;
  const heightChecked = props.size === 'large' ? 15 : props.size === 'small' ? 7 : 10;

  return (
    <Checkbox
      icon={<RootStyle width={width} height={height} />}
      checkedIcon={
        <CheckedRootStyle width={width} height={height}>
          <CheckedBoxStyle width={widthChecked} height={heightChecked} />
        </CheckedRootStyle>
      }
      {...props}
    />
  );
}
