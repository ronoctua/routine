import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef, ReactSVGElement, useState } from 'react';
import CalendarHeatmap, {
  Props as ReactCalendarProps,
} from 'react-calendar-heatmap';

import { StyledComponentProps } from '../../types/styled-component.types';
import handleDate from '../../utils/handleDate';
import { handleTurnPercentageValueIntoClass } from './handleTurnPercentageValueIntoClass';
import { HeatmapCalendarStyles } from './HeatmapCalendar.styles';
import { Tooltip } from './Tooltip.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataItem = any;

const StyledHeatmapCalendar = styled('div', HeatmapCalendarStyles);

export type HeatmapCalendarProps = StyledComponentProps<
  typeof StyledHeatmapCalendar
> &
  ReactCalendarProps & {
    startDateInMonthsToSubtract?: number;
    showOutOfInicialRangeDays?: boolean;
  };

export const HeatmapCalendar = forwardRef<
  ElementRef<typeof StyledHeatmapCalendar>,
  HeatmapCalendarProps
>(
  (
    {
      startDate,
      endDate,
      values,
      classForValue,
      transformDayElement,
      monthLabels,
      weekdayLabels,
      horizontal = false,
      startDateInMonthsToSubtract = 3,
      showOutOfInicialRangeDays = true,
      showMonthLabels = false,
      ...props
    },
    forwardRef,
  ) => {
    const [tooltipContentData, setTooltipContentData] = useState<any>();

    const handleTransformDayElement = (
      element: ReactSVGElement,
      value: DataItem,
    ) => (
      <g
        key={`x-${element.props.x}-y-${element.props.y}`}
        className='day-group-container'
        height={Number(element.props.height)}>
        <g>{!value && element}</g>
        {value && (
          <g className='day-with-data-group-container'>
            <g>{element}</g>

            {value.markOne && (
              <circle
                className='mark mark-one'
                cx={Number(element.props.x) + 8.1}
                cy={Number(element.props.y) + 2}
                r='0.07em'
              />
            )}

            {value.markTwo && (
              <circle
                className='mark mark-two'
                cx={Number(element.props.x) + 5.01}
                cy={Number(element.props.y) + 2}
                r='0.07em'
              />
            )}

            {value.markThree && (
              <circle
                className='mark mark-three'
                cx={Number(element.props.x) + 1.9}
                cy={Number(element.props.y) + 2}
                r='0.07em'
              />
            )}

            {value.date && (
              <text
                x={Number(element.props.x) + 1}
                y={Number(element.props.y) + 8.6}>
                {handleDate(value.date).format('D')}
              </text>
            )}
          </g>
        )}
        <g
          onMouseOver={() => setTooltipContentData(value)}
          onMouseOut={() => setTooltipContentData(null)}
          style={{ cursor: 'pointer' }}>
          <rect
            width={Number(element.props.width) + 0.6}
            height={Number(element.props.height) + 0.6}
            x={Number(element.props.x) - 0.3}
            y={Number(element.props.y) - 0.3}
            fill='transparent'
            className='transparent'
          />
        </g>
      </g>
    );

    const todayDate = handleDate().format('YYYY-MM-DD');

    const referenceStartDate = startDate
      ? handleDate(startDate).format('YYYY-MM-DD')
      : handleDate(todayDate).subtract(startDateInMonthsToSubtract, 'month');

    const startDateDayOfWeek = handleDate(referenceStartDate).format('d');

    const calendarStartDate = handleDate(referenceStartDate)
      .subtract(Number(startDateDayOfWeek) + 1, 'day')
      .format('YYYY-MM-DD');

    const HeatmapCalendarElement = () => (
      <CalendarHeatmap
        startDate={
          showOutOfInicialRangeDays
            ? calendarStartDate
            : handleDate(startDate).format('YYYY-MM-DD')
        }
        endDate={endDate ? handleDate(endDate).format('YYYY-MM-DD') : todayDate}
        values={values}
        classForValue={
          classForValue ||
          ((value: DataItem) => handleTurnPercentageValueIntoClass(value))
        }
        transformDayElement={
          transformDayElement ||
          ((element, value) => handleTransformDayElement(element, value))
        }
        monthLabels={monthLabels || handleDate().localeData().monthsShort()}
        weekdayLabels={
          weekdayLabels || handleDate().localeData().weekdaysShort()
        }
        horizontal={horizontal}
        showMonthLabels={showMonthLabels}
      />
    );

    return (
      <StyledHeatmapCalendar ref={forwardRef} {...props}>
        <HeatmapCalendarElement />

        <Tooltip direction='horizontal' targetValue={tooltipContentData} />
      </StyledHeatmapCalendar>
    );
  },
);

HeatmapCalendar.displayName = 'HeatmapCalendar';
