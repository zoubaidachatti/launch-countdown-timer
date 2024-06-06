import { CustomPaginator, CustomTable } from '@/components';
import { Layout } from '@/config/constants';
import { usePagination } from '@/hooks';
import { Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TopUsersRow } from './TopUsersRow/TopUsersRow';
import { USERS_HEADER_LABELS, users } from './TopUsersTable.constants';

export const TopUsersTable = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { paginator, paginatorMethods, changeOrderBy } = usePagination();
  return (
    <Stack height={'100%'}>
      <Typography marginBlock={2} fontWeight={600} variant="h4" color={'primary.main'}>
        {t('dashboard.top_users')}
      </Typography>
      <Stack justifyContent={'space-between'} height={450} spacing={0.75}>
        <Stack height={390}>
          <CustomTable
            headCells={USERS_HEADER_LABELS}
            maxHeight={'100%'}
            minWidth={500}
            rowHeight={390 / 6}
            isData
            changeOrderBy={changeOrderBy}
            orderBy={paginator.orderBy}
            direction={paginator.order}
            noDataMessage="table.no_data_available"
            striped
            stripeColor={Layout.highlightedBgColor(theme.palette.primary.main)}
          >
            {users.map((user) => (
              <TopUsersRow user={user} key={user.id} />
            ))}
          </CustomTable>
        </Stack>
        <Stack alignItems={'center'}>
          <CustomPaginator
            page={paginator.page}
            size="small"
            rowsPerPage={paginator.rowsPerPage}
            totalRows={users.length}
            paginatorMethods={paginatorMethods}
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
