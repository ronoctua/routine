import { css } from '@routine/ui-web';

export const SurfaceStyles = css({
  display: 'flex',

  gap: '$4',
  minHeight: '30px',
  minWidth: '30px',
  padding: '$6',
  borderWidth: '$medium',
  borderStyle: 'solid',
  borderRadius: '$sm',

  wordBreak: 'break-word',
  borderColor: '$surface-up',
  background: '$surface',

  defaultVariants: {
    direction: 'column',
  },

  variants: {
    status: {
      default: {},
      down: {
        background: '$surface-down',
      },
      positive: {
        borderColor: '$positive',
        background: '$positive-down',
      },
      negative: {
        borderColor: '$negative',
        background: '$negative-down',
      },
      attention: {
        borderColor: '$attention',
        background: '$attention-down',
      },
      primary: {
        borderColor: '$primary',
        background: '$primary-down',
      },
      secondary: {
        borderColor: '$secondary',
        background: '$secondary-down',
      },
      highlighted: {
        borderColor: '$primary',
      },
    },
    padding: {
      none: {
        padding: '0',
      },
      smallest: {
        padding: '$1',
      },
      small: {
        padding: '$2',
      },
      medium: {
        padding: '$5',
      },
      large: {
        padding: '$8',
      },
    },
    radius: {
      none: {
        borderRadius: '0',
      },
      small: {
        borderRadius: '$sm',
      },
      medium: {
        borderRadius: '$md',
      },
      large: {
        borderRadius: '$lg',
      },
      full: {
        borderRadius: '$full',
      },
    },
    border: {
      none: {
        borderWidth: '0',
      },
      thin: {
        borderWidth: '$thin',
      },
      medium: {
        borderWidth: '$medium',
      },
      thick: {
        borderWidth: '$thick',
      },
      heavy: {
        borderWidth: '$heavy',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
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
        minHeight: 'inherit',
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
    secondaryText: {
      true: {
        color: '$text-secondary',
      },
      false: {
        color: '$text',
      },
    },
  },
});
