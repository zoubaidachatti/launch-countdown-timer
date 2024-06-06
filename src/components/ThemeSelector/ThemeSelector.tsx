import ThemeIcon from '@/assets/icons/theme.svg?react';
import { Layout } from '@/config/constants';
import { AppThemeEnum } from '@/config/enums';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setTheme } from '@/redux/slices/app/appSlice';
import { Box, ClickAwayListener, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SVGContainer } from '..';
import { themes } from './ThemeSelector.constants';
import { StyledOption } from './ThemeSelector.style';

export function ThemeSelector() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.appReducer.theme);

  const selectTheme = (theme: AppThemeEnum) => {
    dispatch(setTheme({ theme }));
  };

  const Option = ({
    label,
    color,
    isSelected,
    onClick,
  }: {
    label: string;
    color: string;
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
      <Box borderRadius={`${Layout.borderRadius}px`} width={20} height={20} bgcolor={color} />
      <Typography variant="h6">{t(label)}</Typography>
    </StyledOption>
  );

  const Options = () => (
    <ClickAwayListener
      onClickAway={() => {
        setIsOpen(false);
      }}
    >
      <Stack spacing={0.5} minWidth={100}>
        {themes.map((item) => (
          <Option
            key={item.theme}
            color={item.color}
            isSelected={appTheme === item.theme || appTheme === item.themeDark}
            label={item.label}
            onClick={() => selectTheme(item.theme)}
          />
        ))}
      </Stack>
    </ClickAwayListener>
  );

  return (
    <Tooltip title={<Options />} placement="bottom-end" open={isOpen}>
      <SVGContainer
        isinverted={`${true}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <ThemeIcon />
      </SVGContainer>
    </Tooltip>
  );
}
