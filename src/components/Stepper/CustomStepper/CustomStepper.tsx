import { TypographyOverflow } from '@/components/Typography';
import { Stack, Step, Stepper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConnectorStyle, OrderStyle } from './CustomStepper.style';
import { CustomStepperProps } from './CustomStepper.type';

export function CustomStepper({
  activeIndex,
  steps,
  orientation,
  customConnector,
  customStep,
  onClickStep,
}: CustomStepperProps) {
  const { t } = useTranslation();
  return (
    <Stepper
      sx={{ alignItems: 'center' }}
      activeStep={activeIndex}
      connector={
        customConnector ? <>{customConnector}</> : <ConnectorStyle orientation={orientation} />
      }
      orientation={orientation}
    >
      {steps.map((step, index) => (
        <Step
          key={step.id}
          onClick={
            step.disabled || index === activeIndex
              ? undefined
              : () => {
                  onClickStep?.(index);
                }
          }
        >
          {customStep ? (
            customStep(step)
          ) : (
            <Stack spacing={0.5} alignItems={'center'}>
              <OrderStyle
                iscompleted={`${step.completed}`}
                isactive={`${step.active}`}
                isdisabled={`${step.disabled}`}
              >
                {step.order}
              </OrderStyle>
              {step.title && (
                <TypographyOverflow
                  fontSize={{ xs: '0.8rem', md: undefined }}
                  variant="h5"
                  textAlign={'center'}
                  fontWeight={600}
                >
                  {t(step.title)}
                </TypographyOverflow>
              )}
              {step.caption && (
                <TypographyOverflow
                  fontSize={{ xs: '0.6rem', md: undefined }}
                  variant="body1"
                  width="100%"
                  textAlign={'center'}
                >
                  {t(step.caption)}
                </TypographyOverflow>
              )}
            </Stack>
          )}
        </Step>
      ))}
    </Stepper>
  );
}
