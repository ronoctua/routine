import { css } from '@routine/ui-web';

export const TextFieldStyles = css({
  $$shadowColor: '$colors$text-secondary',
  display: 'flex',
  flexDirection: 'column',

  gap: '$1',
  padding: '$2',
  borderWidth: '$heavy',
  borderColor: '$surface-up',
  borderStyle: 'solid',
  borderRadius: '$sm',
  fontSize: '$md',
  overflow: 'auto',
  lineBreak: 'anywhere',

  color: '$text',
  background: '$surface-down',
  outline: 'none',
  cursor: 'text',

  '&:focus': {
    boxShadow:
      'inset 2px 2px 0px $$shadowColor, inset -2px -2px 0px $$shadowColor',
  },

  defaultVariants: {
    variant: 'input',
    fullWidth: 'true',
    resizable: 'false',
  },

  variants: {
    variant: {
      input: {},
      textarea: {},
      div: {},
    },
    status: {
      default: {},
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
      small: {
        padding: '0 $2',
      },
      medium: {
        padding: '$3',
      },
      large: {
        padding: '$6',
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
    resizable: {
      true: {
        resize: 'both',
      },
      horizontal: {
        resize: 'horizontal',
      },
      vertical: {
        resize: 'vertical',
      },
      false: {
        resize: 'none',
      },
    },
  },
});
