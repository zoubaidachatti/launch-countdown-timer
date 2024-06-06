import DoneIcon from '@/assets/icons/check.svg?react';
import { CustomCard, CustomStepper, TypographyOverflow } from '@/components';
import { StepType } from '@/types/interfaces';
import { updateNonLinearStepper, updateStepper } from '@/utils';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NON_LINEAR_STEPPER,
  SIMPLE_STEPPER,
  STEPPER,
  STEPPER_WITH_TITLE,
} from './StepperPage.constants';
import { CustomConnector, CustomStepOrder, SecondCustomConnector } from './SteppersPage.style';

export const SteppersPage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCustomIndex, setActiveCustomIndex] = useState(0);
  const [activeIndexVertical, setActiveIndexVertical] = useState(0);
  const [steps, setSteps] = useState(STEPPER);
  const [customSteps, setCustomSteps] = useState(STEPPER);
  const [simpleSteps, setSimpleSteps] = useState(SIMPLE_STEPPER);
  const [stepsWithTitle, setStepsWithTitle] = useState(STEPPER_WITH_TITLE);
  const [nonLinearSteps, setNonLinearSteps] = useState(NON_LINEAR_STEPPER);
  const [verticalStepper, setVerticalStepper] = useState(STEPPER);

  const onClickStep = (index: number) => {
    setActiveIndex(index);
    setSteps((prev) => updateStepper(index, prev));
    setSimpleSteps((prev) => updateStepper(index, prev));
    setStepsWithTitle((prev) => updateStepper(index, prev));
  };

  const onClickNonLinearStep = (index: number) => {
    setNonLinearSteps((prev) => updateNonLinearStepper(index, prev));
  };

  const onClickVerticalStep = (index: number) => {
    setActiveIndexVertical(index);
    setVerticalStepper((prev) => updateStepper(index, prev));
  };

  const onClickCustomStep = (index: number) => {
    setActiveCustomIndex(index);
    setCustomSteps((prev) => updateStepper(index, prev));
  };

  const customStep = ({ order, active, caption, completed, title }: StepType) => (
    <Stack spacing={1.5} alignItems={'center'}>
      <CustomStepOrder active={`${active}`} done={`${completed}`}>
        {completed ? <DoneIcon /> : order}
      </CustomStepOrder>
      <Stack spacing={0.5} alignItems={'center'}>
        {title && (
          <TypographyOverflow
            variant="h5"
            fontWeight={700}
            color={active ? 'primary.main' : completed ? 'success.main' : 'grey.500'}
          >
            {t(title)}
          </TypographyOverflow>
        )}
        {caption && (
          <TypographyOverflow
            variant="body2"
            color={active ? 'primary.main' : completed ? 'success.main' : 'grey.500'}
          >
            {t(caption)}
          </TypographyOverflow>
        )}
      </Stack>
    </Stack>
  );

  return (
    <>
      <CustomCard header="stepper.basic_steppers">
        <Stack spacing={2}>
          <Stack spacing={1} width="100%">
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              {t('stepper.simple_stepper')}
            </Typography>
            <CustomStepper
              steps={simpleSteps}
              activeIndex={activeIndex}
              onClickStep={onClickStep}
            />
          </Stack>
          <Stack spacing={1} width="100%">
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              {t('stepper.stepper_with_title')}
            </Typography>
            <CustomStepper
              steps={stepsWithTitle}
              activeIndex={activeIndex}
              onClickStep={onClickStep}
            />
          </Stack>
          <Stack spacing={1} width="100%">
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              {t('stepper.stepper_with_caption')}
            </Typography>
            <CustomStepper steps={steps} activeIndex={activeIndex} onClickStep={onClickStep} />
          </Stack>
        </Stack>
      </CustomCard>
      <CustomCard header="stepper.non_linear_steppers">
        <Stack width="100%">
          <CustomStepper steps={nonLinearSteps} onClickStep={onClickNonLinearStep} />
        </Stack>
      </CustomCard>
      <CustomCard header="stepper.vertical_stepper">
        <Stack width="100%">
          <CustomStepper
            orientation="vertical"
            steps={verticalStepper}
            onClickStep={onClickVerticalStep}
            activeIndex={activeIndexVertical}
          />
        </Stack>
      </CustomCard>
      <CustomCard header="stepper.customized_stepper">
        <Stack>
          <Stack spacing={1} width="100%">
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              {t('stepper.custom_connector')}
            </Typography>
            <CustomStepper
              steps={customSteps}
              activeIndex={activeCustomIndex}
              onClickStep={onClickCustomStep}
              customConnector={<CustomConnector />}
            />
          </Stack>
          <Stack spacing={1} width="100%">
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              {t('stepper.custom_step')}
            </Typography>
            <CustomStepper
              steps={customSteps}
              activeIndex={activeCustomIndex}
              onClickStep={onClickCustomStep}
              customStep={customStep}
              customConnector={<SecondCustomConnector />}
            />
          </Stack>
        </Stack>
      </CustomCard>
    </>
  );
};

export default SteppersPage;
