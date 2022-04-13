import { css } from '@routine/ui-web';

export const LabelStyles = css({
  display: 'flex',

  defaultVariants: {
    fullWidth: 'true',
    horizontal: 'false',
  },

  variants: {
    horizontal: {
      true: {
        flexDirection: 'row',
        gap: '$3',
      },
      false: {
        flexDirection: 'column',
        gap: '0',
      },
    },
    fullWidth: {
      true: {
        flex: '1',
        width: '-webkit-fill-available; width: -moz-available;',
      },
      false: {},
    },
    fullHeight: {
      true: {
        height: '-webkit-fill-available; height: inherit;',
      },
      false: {},
    },
    centerContent: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      false: {},
    },
    underline: {
      true: {
        textDecoration: 'underline 4px',
        textUnderlineOffset: '1px',
      },
      false: {},
    },
  },
});
