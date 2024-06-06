import { CustomCard, GenericInput } from '@/components';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { RangeInputs } from './RangePage.constants';

export function RangePage() {
  const formMethods = useForm({ mode: 'onChange', shouldFocusError: true });
  return (
    <FormProvider {...formMethods}>
      <CustomCard header={'inputs.continuous_slider'}>
        <Stack gap={2.75} direction={'row'} flexWrap={'wrap'} p={2}>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[0]} />
          </Stack>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[1]} />
          </Stack>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[2]} />
          </Stack>
        </Stack>
        <Stack gap={2.75} direction={'row'} flexWrap={'wrap'} p={2}>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[13]} />
          </Stack>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[14]} />
          </Stack>
          <Stack width={200}>
            <GenericInput inputObject={RangeInputs[15]} />
          </Stack>
        </Stack>
      </CustomCard>

      <CustomCard header={'inputs.discrete_slider'}>
        <Stack gap={3} direction={'row'} flexWrap={'wrap'} paddingBlock={5} paddingInline={2}>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[3]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[4]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[5]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[6]} />
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header={'inputs.range_slider'}>
        <Stack gap={3} direction={'row'} flexWrap={'wrap'} p={2}>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[7]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[8]} />
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header={'inputs.disabled_and_readonly'}>
        <Stack gap={3} direction={'row'} flexWrap={'wrap'} p={2}>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[9]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[10]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[11]} />
          </Stack>
          <Stack width={400}>
            <GenericInput inputObject={RangeInputs[12]} />
          </Stack>
        </Stack>
      </CustomCard>
    </FormProvider>
  );
}

export default RangePage;
