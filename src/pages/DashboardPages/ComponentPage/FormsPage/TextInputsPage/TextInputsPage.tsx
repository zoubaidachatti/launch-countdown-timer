import { CustomCard } from '@/components';
import {
  BasicInputsForm,
  DisabledInputsForm,
  TextAlignInputsForm,
  TooltipInputsForm,
  ValidationInputsForm,
} from '@/features';

export function TextInputsPage() {
  return (
    <>
      {/* Basic */}
      <CustomCard header="inputs.basic_inputs">
        <BasicInputsForm />
      </CustomCard>
      {/* Disabled */}
      <CustomCard header="inputs.disabled_inputs">
        <DisabledInputsForm />
      </CustomCard>
      {/* Tooltip */}
      <CustomCard header="inputs.inputs_with_helper">
        <TooltipInputsForm />
      </CustomCard>
      {/* Text Align */}
      <CustomCard header="inputs.inputs_with_different_text_align">
        <TextAlignInputsForm />
      </CustomCard>
      {/* Validation */}
      <CustomCard header="inputs.inputs_validation">
        <ValidationInputsForm />
      </CustomCard>
    </>
  );
}

export default TextInputsPage;
