import { CustomCard } from '@/components';
import { ColorsConfig } from '@/config/constants';
import { EmployeesTable } from '@/features';
import { Stack, alpha } from '@mui/material';

export const TablePage = () => {
  return (
    <>
      <CustomCard header="table.basic_table">
        <Stack width="100%" height={500}>
          <EmployeesTable />
        </Stack>
      </CustomCard>
      <CustomCard header="table.hover_effect">
        <Stack width="100%" height={500}>
          <EmployeesTable hover />
        </Stack>
      </CustomCard>
      <CustomCard header="table.loading">
        <Stack width="100%" height={500}>
          <EmployeesTable isLoading />
        </Stack>
      </CustomCard>
      <CustomCard header="table.striped">
        <Stack width="100%" height={500}>
          <EmployeesTable striped />
        </Stack>
      </CustomCard>
      <CustomCard header="table.stripe_color">
        <Stack width="100%" height={500}>
          <EmployeesTable striped stripeColor={alpha(ColorsConfig.primary.light, 0.2)} />
        </Stack>
      </CustomCard>
      <CustomCard header="table.custom_rows_colors">
        <Stack width="100%" height={500}>
          <EmployeesTable coloredRows />
        </Stack>
      </CustomCard>
    </>
  );
};

export default TablePage;
