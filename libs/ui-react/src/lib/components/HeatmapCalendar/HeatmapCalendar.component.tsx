import { SOLXMark } from '@routine/ui-icons';
import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef, useState, useEffect } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import handleDate from '../../utils/handleDate';
import { Button } from '../Button';
import { Surface } from '../Surface';
import { handleTurnPercentageValueIntoClass } from './handleTurnPercentageValueIntoClass';
import { HeatmapCalendarStyles } from './HeatmapCalendar.styles';

const StyledHeatmapCalendar = styled('div', HeatmapCalendarStyles);

export type HeatmapCalendarProps = StyledComponentProps<
  typeof StyledHeatmapCalendar
> & {
  heatmapData: any;
};

/**
 * HeatmapCalendar component
 *
 * @example
 * Data example
 * ```ts
 * const heatmapData = [
 *   {
 *     date: '2022-03-31',
 *     totalPercentage: 30,
 *     percentages: { checklist: 30, sports: 30 },
 *     note: 'Note. example.',
 *     extraData: { example: 'Extra data example' },
 *   },
 *   {
 *     date: '2022-04-20',
 *     totalPercentage: 100,
 *     percentages: { sports: 100 },
 *    },
 * ];
 * ```
 *
 * @example
 * Usage example
 * ```jsx
 * <HeatmapCalendar heatmapData={heatmapData} />
 * ```
 *
 * @param heatmapData - Data array to be used to create the heatmap.
 */
export const HeatmapCalendar = forwardRef<
  ElementRef<typeof StyledHeatmapCalendar>,
  HeatmapCalendarProps
>(({ heatmapData, ...props }, forwardRef) => {
  const [targetData, setTargetData] = useState<any>(null);
  const todayDate = handleDate().format('YYYY-MM-DD');
  const daysQuantity = 60;

  const daysElementsArray = [];

  useEffect(() => {
    const heatmapContentCalendar = window.document.querySelector(
      '[data-class="heatmap-content-container"]',
    );

    if (heatmapContentCalendar) {
      heatmapContentCalendar.scrollTop = 9999999;

      window.addEventListener('resize', () => {
        heatmapContentCalendar.scrollTop = 9999999;
      });
    }
  }, []);

  for (let index = 0; index < daysQuantity; index++) {
    const targetDate = handleDate(todayDate).subtract(index, 'days');
    const targetDateString = targetDate.format('YYYY-MM-DD');
    const targetLocalDateString = targetDate.format('L');

    const targetItem = heatmapData.find(
      (item: any) => item.date === targetDateString,
    );
    const elementClassName = handleTurnPercentageValueIntoClass(targetItem);

    const handleMouseOver = (itemData: any) => {
      const newTargetData = {
        ...itemData,
        date: targetLocalDateString,
        className: elementClassName,
      };

      setTargetData(newTargetData);
    };

    const dayElement = {
      key: targetDateString,
      element: () => (
        <div
          key={targetDateString}
          data-class='heatmap-day-element'
          className={elementClassName}
          onMouseOver={() => handleMouseOver(targetItem)}>
          {targetDate.format('DD')}
        </div>
      ),
    };

    daysElementsArray.push(dayElement);
  }

  return (
    <StyledHeatmapCalendar ref={forwardRef} {...props}>
      <div data-class='heatmap-content-container'>
        {daysElementsArray.reverse().map((dayElement) => (
          <dayElement.element key={dayElement.key} />
        ))}
      </div>

      {targetData && targetData.date && (
        <div data-class='heatmap-tooltip-container'>
          <div>
            <Button
              variant='ghost'
              padding='smaller'
              leftIcon={<SOLXMark />}
              onClick={() => setTargetData(null)}
            />
          </div>

          <div>
            <span>
              <strong>{targetData.date}</strong>
            </span>
            {targetData.totalPercentage ? (
              <span
                data-class='total-percentage'
                className={targetData.className}>
                <strong>{targetData.totalPercentage}%</strong>
              </span>
            ) : (
              <span>No data</span>
            )}
          </div>

          {targetData.percentages &&
            Object.keys(targetData.percentages).map((key) => (
              <div key={`${targetData.date} - ${key}`}>
                <span data-class='title'>{key}</span>
                <span>{targetData.percentages[key]}%</span>
              </div>
            ))}

          {targetData.extraData &&
            Object.keys(targetData.extraData).map((key) => (
              <div key={`${targetData.date} - ${key}`}>
                <span data-class='title'>{key}</span>
                <span>{targetData.extraData[key]}</span>
              </div>
            ))}

          {targetData.note && (
            <div>
              <Surface
                padding='smallest'
                status={'secondary'}
                style={{ minWidth: '80px' }}>
                <span>{targetData.note}</span>
              </Surface>
            </div>
          )}
        </div>
      )}
    </StyledHeatmapCalendar>
  );
});

HeatmapCalendar.displayName = 'HeatmapCalendar';
