import { GlobalVariables } from '@/config/constants';
import { PaginationItem, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PaginatorButtonsProps } from './PaginationRowsPerPage.type';

const buttons = [
  { value: GlobalVariables.pagination.elementsPerPage.min },
  { value: GlobalVariables.pagination.elementsPerPage.median },
  { value: GlobalVariables.pagination.elementsPerPage.max },
];

const PaginationRowsPerPage = ({
  selectedValue,
  total,
  perPageText,
  variant,
  shape,
  size,
  color,
  onButtonClick,
}: PaginatorButtonsProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={'10px'}>
      <Stack direction={'row'}>
        {buttons.map(({ value }, index) => (
          <PaginationItem
            disabled={index !== 0 && (!total || value > total * 2)}
            key={value}
            selected={selectedValue === value}
            onClick={() => {
              onButtonClick(value);
            }}
            variant={variant ?? 'outlined'}
            shape={shape ?? 'rounded'}
            color={color ?? 'primary'}
            size={size}
            page={value}
          >
            {value}
          </PaginationItem>
        ))}
      </Stack>
      <Typography variant="body2">{t(perPageText ?? 'common.elements_per_page')}</Typography>
    </Stack>
  );
};

export default PaginationRowsPerPage;
