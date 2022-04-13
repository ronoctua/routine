/* eslint-disable react/jsx-no-useless-fragment */
import { styled } from '@routine/ui-web';

import { StyledComponentProps } from '../../types/styled-component.types';
import handleDate from '../../utils/handleDate';
import { handleTurnPercentageValueIntoClass } from './handleTurnPercentageValueIntoClass';
import { TooltipStyles } from './Tooltip.styles';

const StyledTooltipCalendar = styled('div', TooltipStyles);

type TooltipType = StyledComponentProps<typeof StyledTooltipCalendar> & {
  targetValue: any;
};

export const Tooltip: React.FC<TooltipType> = ({ targetValue, ...props }) => {
  if (!targetValue) {
    return <></>;
  }

  if (typeof targetValue === 'string' || typeof targetValue === 'number') {
    return (
      <StyledTooltipCalendar {...props}>
        <div>
          <span>{targetValue}</span>
        </div>
      </StyledTooltipCalendar>
    );
  }

  if (typeof targetValue === 'object') {
    const resultClassName = handleTurnPercentageValueIntoClass(targetValue);

    const tooltipDate = targetValue.date
      ? handleDate(targetValue.date).format('L')
      : '';

    const tooltipPercentage = targetValue.percentage;

    const tooltipItens: any[][] = [];

    Object.keys(targetValue).forEach((key) => {
      if (
        key !== 'title' &&
        key !== 'date' &&
        key !== 'percentage' &&
        key !== 'markOne' &&
        key !== 'markTwo' &&
        key !== 'markThree'
      ) {
        tooltipItens.push([key, targetValue[key]]);
      }
    });

    const TooltipContent = () => (
      <StyledTooltipCalendar {...props}>
        {tooltipDate && (
          <div>
            <span>
              <h4>{tooltipDate}</h4>
            </span>
            {tooltipPercentage && (
              <span className={resultClassName}>
                <strong>{tooltipPercentage}%</strong>
              </span>
            )}
          </div>
        )}

        {!tooltipDate && tooltipPercentage && (
          <div>
            <span>
              <h4>Result</h4>
            </span>
            <span>
              <strong>{tooltipPercentage}%</strong>
            </span>
          </div>
        )}

        {tooltipItens.length > 0 &&
          tooltipItens.map((tooltipItem) => (
            <div key={tooltipItem[0]}>
              <span>
                <h4>{tooltipItem[0]}</h4>
              </span>
              <span>{tooltipItem[1]}</span>
            </div>
          ))}
      </StyledTooltipCalendar>
    );

    return <TooltipContent />;
  }

  return <></>;
};
