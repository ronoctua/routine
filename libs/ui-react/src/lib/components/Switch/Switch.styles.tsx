import { css } from '@routine/ui-web';

export const SwitchStyles = css({
  all: 'unset',
  position: 'relative',

  minWidth: 39,
  width: 39,
  minHeight: 21,
  height: 21,

  borderRadius: '$full',
  backgroundColor: '$background-down',
  outline: '$outline-discreet',

  cursor: 'pointer',

  '&[data-state="checked"]': {
    outlineColor: '$primary-up',
    backgroundColor: '$primary',
  },

  '&:focus': {
    boxShadow: '0px 0px 10px $colors$text',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  variants: {
    status: {
      default: {},
      positive: {
        '&[data-state="checked"]': {
          outlineColor: '$positive-up',
          backgroundColor: '$positive',
        },
      },
      attention: {
        '&[data-state="checked"]': {
          outlineColor: '$attention-up',
          backgroundColor: '$attention',
        },
      },
      negative: {
        '&[data-state="checked"]': {
          outlineColor: '$negative-up',
          backgroundColor: '$negative',
        },
      },
      primary: {
        '&[data-state="checked"]': {
          outlineColor: '$primary-up',
          backgroundColor: '$primary',
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          outlineColor: '$secondary-up',
          backgroundColor: '$secondary',
        },
      },
    },
  },
});
