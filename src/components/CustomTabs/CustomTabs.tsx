import { TabsVariantEnum } from '@/config/enums';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UnderlinedTab, UnderlinedTabs } from './CustomTabs.style';
import { CustomTabsProps } from './CustomTabs.type';

export function CustomTabs({
  tabs,
  defaultTabValue = 0,
  variant = TabsVariantEnum.Rounded,
}: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState<number | string>(defaultTabValue);
  const { t } = useTranslation();
  const onClickTab = (value: string | number, callback?: () => void) => {
    setActiveTab(value);
    callback?.();
  };

  if (variant === TabsVariantEnum.Rounded) {
    return (
      <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
        {tabs.map(({ label, value, disabled, onClick }, index) => (
          <Tab
            key={index}
            label={typeof label === 'string' ? t(label) : label}
            value={value}
            disabled={disabled}
            onClick={() => onClickTab(value, onClick)}
          />
        ))}
      </Tabs>
    );
  }

  return (
    // TODO hide scroll button when un-clickable
    <UnderlinedTabs
      value={activeTab}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
    >
      {tabs.map(({ label, value, disabled, onClick }, index) => (
        <UnderlinedTab
          key={index}
          label={typeof label === 'string' ? t(label) : label}
          disabled={disabled}
          value={value}
          onClick={() => onClickTab(value, onClick)}
        />
      ))}
    </UnderlinedTabs>
  );
}
