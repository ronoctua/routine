import { css } from '@routine/ui-web';

export const IconStyles = css({
  defaultVariants: {
    variant: 'midLine',
  },

  variants: {
    variant: {
      midLine: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',

        fontSize: '1em',

        svg: {
          width: '1em',
          maxHeight: '1em',
        },
      },
    },
  },
});
