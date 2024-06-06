import DarkModeIcon from '@/assets/icons/dark-mode.svg?react';
import LightModeIcon from '@/assets/icons/light-mode.svg?react';
import { AppModeEnum } from '@/config/enums';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMode, setTheme } from '@/redux/slices/app/appSlice';
import { OrientationType, SizeType } from '@/types/interfaces';
import Clouds from './Clouds/Clouds';
import {
  CircleStyle,
  IconContainer,
  RootStyle,
  SimpleSwitchContainer,
  StyledStack,
} from './CustomModeSwitch.style';
import FourPointsStars from './FourPointsStars/FourPointsStars';

const CustomModeSwitch = ({
  variant,
  orientation,
  size,
}: {
  variant: 'simple' | 'fancy';
  orientation: OrientationType;
  size: SizeType;
}) => {
  const dispatch = useAppDispatch();
  const appMode = useAppSelector((state) => state.appReducer.mode);
  const appTheme = useAppSelector((state) => state.appReducer.theme);

  const isDark = appMode === AppModeEnum.Dark;
  const switchAppMode = () => {
    dispatch(setMode({ mode: isDark ? AppModeEnum.Light : AppModeEnum.Dark }));
    dispatch(setTheme({ theme: appTheme }));
  };

  if (variant === 'simple')
    return (
      <SimpleSwitchContainer size={size} orientation={orientation} onClick={switchAppMode}>
        <IconContainer isdark={`${isDark}`} alignItems={'center'} justifyContent={'center'}>
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </IconContainer>
      </SimpleSwitchContainer>
    );

  return (
    <RootStyle
      isdark={`${isDark}`}
      justifyContent={'center'}
      onClick={switchAppMode}
      alignItems={isDark ? 'flex-start' : 'flex-end'}
      size={size}
      orientation={orientation}
    >
      <CircleStyle isdark={`${isDark}`} />
      <StyledStack transform={isDark ? 'translateY(20px)' : 'translateY(0)'}>
        <Clouds />
      </StyledStack>
      <StyledStack transform={isDark ? 'translateY(0)' : 'translateY(-20px)'}>
        <FourPointsStars />
      </StyledStack>
    </RootStyle>
  );
};

export default CustomModeSwitch;
