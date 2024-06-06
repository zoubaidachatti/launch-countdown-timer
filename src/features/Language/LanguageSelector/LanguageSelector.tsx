import TranslationIcon from '@/assets/icons/translate.svg?react';
import { SVGContainer } from '@/components';
import { LanguageCodesEnum } from '@/config/enums';
import useLanguage from '@/hooks/useLanguage';
import { ClickAwayListener, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from './LanguageSelector.constants';
import { StyledOption } from './LanguageSelector.style';

export function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectLanguage = (lang: LanguageCodesEnum) => {
    changeLanguage(lang);
  };

  const Option = ({
    label,
    isSelected,
    onClick,
  }: {
    label: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <StyledOption onClick={onClick} isselected={`${isSelected}`} padding={0.75}>
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
        {languages.map((language) => (
          <Option
            key={language.label}
            isSelected={currentLanguage === language.langCode}
            label={language.label}
            onClick={() => selectLanguage(language.langCode)}
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
        <TranslationIcon />
      </SVGContainer>
    </Tooltip>
  );
}
