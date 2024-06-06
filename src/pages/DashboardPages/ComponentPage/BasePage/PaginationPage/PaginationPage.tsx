import { CustomCard, CustomPaginator } from '@/components';
import { usePagination } from '@/hooks';
import { PaginationColor, PaginationShape, PaginationVariant, SizeType } from '@/types/interfaces';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  TotalRows,
  paginationButtons,
  paginationColors,
  paginationShapes,
  paginationSizes,
  paginationVariants,
} from './PaginationPage.constants';

export function PaginationPage() {
  const { paginator, paginatorMethods } = usePagination();
  const { t } = useTranslation();
  return (
    <>
      <CustomCard header={'pagination.basic_pagination'}>
        <Stack spacing={2}>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.pagination_variants')}
            </Typography>
            {paginationVariants.map(({ variant, label, id }) => (
              <Stack spacing={1} key={id} direction={'column'}>
                <Typography>{t(label)}</Typography>
                <CustomPaginator
                  page={paginator.page}
                  rowsPerPage={paginator.rowsPerPage}
                  totalRows={TotalRows}
                  paginatorMethods={paginatorMethods}
                  variant={variant as PaginationVariant}
                />
              </Stack>
            ))}
          </Stack>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.pagination_colors')}
            </Typography>
            {paginationColors.map(({ color, label, id }) => (
              <Stack spacing={1} key={id} direction={'column'}>
                <Typography>{t(label)}</Typography>
                <CustomPaginator
                  page={paginator.page}
                  rowsPerPage={paginator.rowsPerPage}
                  totalRows={TotalRows}
                  paginatorMethods={paginatorMethods}
                  color={color as PaginationColor}
                />
              </Stack>
            ))}
          </Stack>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.pagination_shapes')}
            </Typography>
            {paginationShapes.map(({ shape, label, id }) => (
              <Stack spacing={1} key={id} direction={'column'}>
                <Typography>{t(label)}</Typography>
                <CustomPaginator
                  page={paginator.page}
                  rowsPerPage={paginator.rowsPerPage}
                  totalRows={TotalRows}
                  paginatorMethods={paginatorMethods}
                  shape={shape as PaginationShape}
                />
              </Stack>
            ))}
          </Stack>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.pagination_sizes')}
            </Typography>{' '}
            {paginationSizes.map(({ size, label, id }) => (
              <Stack spacing={1} key={id} direction={'column'}>
                <Typography>{t(label)}</Typography>
                <CustomPaginator
                  page={paginator.page}
                  rowsPerPage={paginator.rowsPerPage}
                  totalRows={TotalRows}
                  paginatorMethods={paginatorMethods}
                  size={size as SizeType}
                />
              </Stack>
            ))}
          </Stack>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.disabled_pagination')}
            </Typography>
            <Stack spacing={1} direction={'column'}>
              <CustomPaginator
                page={paginator.page}
                rowsPerPage={paginator.rowsPerPage}
                totalRows={TotalRows}
                paginatorMethods={paginatorMethods}
                disabled
              />
            </Stack>
            <Stack spacing={1} direction={'column'}>
              <CustomPaginator
                page={paginator.page}
                rowsPerPage={paginator.rowsPerPage}
                totalRows={TotalRows}
                paginatorMethods={paginatorMethods}
                variant="text"
                disabled
              />
            </Stack>
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard>
        <Stack spacing={2}>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.navigation_buttons')}
            </Typography>
            {paginationButtons.map(
              ({
                label,
                hideNextButton,
                hidePrevButton,
                showFirstButton,
                showLastButton,
                CustomBackIcon,
                CustomNextIcon,
                id,
              }) => (
                <Stack spacing={1} key={id} direction={'column'}>
                  <Typography>{t(label)}</Typography>
                  <CustomPaginator
                    page={paginator.page}
                    rowsPerPage={paginator.rowsPerPage}
                    totalRows={TotalRows}
                    paginatorMethods={paginatorMethods}
                    hideNextButton={hideNextButton}
                    hidePrevButton={hidePrevButton}
                    showFirstButton={showFirstButton}
                    showLastButton={showLastButton}
                    CustomBackIcon={CustomBackIcon}
                    CustomNextIcon={CustomNextIcon}
                    variant="text"
                  />
                </Stack>
              ),
            )}
          </Stack>
          <Stack spacing={2.5}>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t('pagination.rows_per_page')}
            </Typography>
            <CustomPaginator
              page={paginator.page}
              rowsPerPage={paginator.rowsPerPage}
              totalRows={TotalRows}
              paginatorMethods={paginatorMethods}
              variant="outlined"
              showRowsPerPage
            />
          </Stack>
        </Stack>
      </CustomCard>
    </>
  );
}

export default PaginationPage;
