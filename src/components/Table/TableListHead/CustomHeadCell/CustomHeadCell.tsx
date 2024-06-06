import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RootStyle } from './CustomHeadCell.style';
import { CustomHeadCellProps } from './CustomHeadCell.type';
import { HeadCell } from '@/types/interfaces';
import { TypographyOverflow, TableCheckBox, TableListHeadSort } from '@/components';

export function CustomHeadCell({
  index,
  headCell,
  isAllSelected,
  direction,
  onSortClick,
  onSelectAll,
}: CustomHeadCellProps) {
  const { t } = useTranslation();

  const onHeadCellClick = () => {
    onSortClick(headCell.id, index);
  };

  const generateHeadCellOptions = (hc: HeadCell) => {
    if (!hc.isAction && !hc.isNotSortable) {
      return <TableListHeadSort direction={direction} />;
    }
    return null;
  };

  const renderHeadCell = () => {
    switch (true) {
      case headCell.isAction:
        return (
          <TypographyOverflow
            marginLeft={headCell?.marginLeft}
            marginRight={headCell?.marginRight}
            textAlign={headCell.align}
            title={t(headCell.label)}
          >
            {t(headCell.label)}
          </TypographyOverflow>
        );
      case headCell.isSelect:
        return (
          <TableCheckBox
            sx={{ padding: 0 }}
            onClick={onSelectAll}
            checked={isAllSelected ?? false}
          />
        );
      default:
        return (
          <Stack
            alignItems={'center'}
            direction="row"
            sx={{
              cursor: 'pointer',
            }}
            onClick={onHeadCellClick}
            spacing={0.5}
            justifyContent={headCell.align}
          >
            <TypographyOverflow
              marginLeft={headCell?.marginLeft}
              marginRight={headCell?.marginRight}
              title={t(headCell.label)}
            >
              {t(headCell.label)}
            </TypographyOverflow>
            {generateHeadCellOptions(headCell)}
          </Stack>
        );
    }
  };

  return (
    <RootStyle align={headCell.align} width={`${headCell.xsWidth}%`}>
      {renderHeadCell()}
    </RootStyle>
  );
}
