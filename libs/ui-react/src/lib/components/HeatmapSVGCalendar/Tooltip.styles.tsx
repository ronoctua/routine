import { css } from '@routine/ui-web';

export const TooltipStyles = css({
  display: 'flex',
  flexWrap: 'wrap',

  gap: '16px',
  padding: '2px 8px 20px 8px',
  fontSize: '$sm',

  color: '$primary-up',

  div: {
    display: 'flex',
    flexDirection: 'column',

    gap: '4px',
  },

  h4: {
    textTransform: 'capitalize',
    color: '$text',
  },

  defaultVariants: {
    direction: 'horizontal',
  },

  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
});
