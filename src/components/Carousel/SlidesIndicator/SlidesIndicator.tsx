import { MouseEvent } from 'react';
import { CustomIndicatorStyle, IndicatorStyle, IndicatorsContainer } from './SlidesIndicator.style';
import { SlidesIndicatorProps } from './SlidesIndicator.type';

export function SlidesIndicator({
  slides,
  customIndicator,
  selectedIndicator,
  onIndicatorClick,
}: SlidesIndicatorProps) {
  const onClick = (e: MouseEvent, index: number) => {
    e.stopPropagation();
    onIndicatorClick(index);
  };

  return (
    <IndicatorsContainer direction={'row'} gap={1} flexWrap={'wrap'}>
      {slides.map(({ order }) =>
        customIndicator ? (
          <CustomIndicatorStyle
            key={`slide_indicator_${order}`}
            onClick={(e) => onClick(e, order)}
            isselected={`${selectedIndicator === order}`}
          >
            {customIndicator}
          </CustomIndicatorStyle>
        ) : (
          <IndicatorStyle
            key={`slide_indicator_${order}`}
            onClick={(e) => onClick(e, order)}
            isselected={`${selectedIndicator === order}`}
          />
        ),
      )}
    </IndicatorsContainer>
  );
}

export default SlidesIndicator;
