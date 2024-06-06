import MoonIcon from '@/assets/icons/dark_mode.svg?react';
import SunnyIcon from '@/assets/icons/sunny.svg?react';
import AutoIcon from '@/assets/icons/tonality.svg?react';
import { AppModeEnum } from '@/config/enums';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMode, setTheme } from '@/redux/slices/app/appSlice';
import { ClickAwayListener, Stack, Tooltip, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SVGContainer } from '../SVGContainer/SVGContainer.style';
import { StyledOption } from './ModeSelector.style';

export const ModeSelector = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const appMode = useAppSelector((state) => state.appReducer.mode);
  const appTheme = useAppSelector((state) => state.appReducer.theme);
  const [isOpen, setIsOpen] = useState(false);

  const switchAppMode = (mode: AppModeEnum) => {
    if (mode === appMode) return;
    dispatch(setMode({ mode }));
    dispatch(setTheme({ theme: appTheme }));
  };

  const Option = ({
    label,
    icon,
    isSelected,
    onClick,
  }: {
    label: string;
    icon: ReactNode;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <StyledOption
      onClick={onClick}
      direction={'row'}
      spacing={1}
      isselected={`${isSelected}`}
      padding={0.75}
      alignItems={'center'}
    >
      {icon}
      <Typography variant="h6">{t(label)}</Typography>
    </StyledOption>
  );

  const Options = () => (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Stack spacing={0.5} minWidth={100}>
        <Option
          icon={<SunnyIcon />}
          isSelected={appMode === AppModeEnum.Light}
          label="dashboard.light"
          onClick={() => switchAppMode(AppModeEnum.Light)}
        />
        <Option
          icon={<MoonIcon />}
          isSelected={appMode === AppModeEnum.Dark}
          label="dashboard.dark"
          onClick={() => switchAppMode(AppModeEnum.Dark)}
        />
        <Option
          icon={<AutoIcon />}
          isSelected={appMode === AppModeEnum.Auto}
          label="dashboard.auto"
          onClick={() => switchAppMode(AppModeEnum.Auto)}
        />
      </Stack>
    </ClickAwayListener>
  );

  return (
    <Tooltip title={<Options />} placement="bottom-end" open={isOpen}>
      <SVGContainer isinverted={`${true}`} onClick={() => setIsOpen((prev) => !prev)}>
        {appMode === AppModeEnum.Dark ? (
          <MoonIcon />
        ) : appMode === AppModeEnum.Light ? (
          <SunnyIcon />
        ) : (
          <AutoIcon />
        )}
      </SVGContainer>
    </Tooltip>
  );
};
