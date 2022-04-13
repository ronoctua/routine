import { css } from '@routine/ui-web';

export const ButtonStyles = css({
  $$textColor: '$colors$text',
  $$primaryColor: '$colors$primary',
  $$primaryUpColor: '$colors$primary-up',
  $$primaryDownColor: '$colors$primary-down',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',

  appearance: 'none',
  minHeight: '38px',
  minWidth: '38px',
  width: 'fit-content',
  height: 'fit-content',
  gap: '8px',
  padding: '$2',
  border: 'none',
  fontSize: '$md',
  fontWeight: '$bold',
  borderRadius: '$sm',

  boxShadow: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.2)',
  },

  '&:active': {
    filter: 'brightness(1.4)',
  },

  '&:disabled': {
    $$primaryColor: '$colors$discreet',
    $$primaryUpColor: '$colors$discreet-up',
    $$primaryDownColor: '$colors$discreet-down',
    $$textColor: '$colors$discreet-up',

    color: '$$textColor',
    cursor: 'not-allowed',

    '&:hover, &:active': {
      color: '$$textColor',
      filter: 'brightness(1)',
    },
  },

  defaultVariants: {
    variant: 'button',
  },

  variants: {
    variant: {
      button: {
        color: '$$textColor',
        background: '$$primaryColor',
        boxShadow: '$default',
      },
      outlined: {
        boxShadow: 'inset 0 0 0 1px $$primaryUpColor',
        color: '$$primaryUpColor',
        background: '$$primaryDownColor',

        '&:hover, &:active': {
          background: '$$primaryDownColor',
        },
      },
      ghost: {
        color: '$$primaryUpColor',
        background: 'transparent',

        '&:hover, &:active': {
          background: '$colors$hover',
        },
      },
      link: {
        minHeight: 'auto',
        minWidth: 'auto',
        padding: 'unset',

        textTransform: 'unset',
        color: '$$primaryUpColor',
        background: 'transparent',
      },
      text: {
        minHeight: 'auto',
        minWidth: 'auto',
        padding: 'unset',

        textTransform: 'unset',
        color: '$$textColor',
        background: 'transparent',
      },
      textSecondary: {
        $$textColor: '$colors$text-secondary',

        minHeight: 'auto',
        minWidth: 'auto',
        padding: 'unset',

        textTransform: 'unset',
        color: '$$textColor',
        background: 'transparent',
      },
    },
    status: {
      default: {},
      positive: {
        $$primaryColor: '$colors$positive',
        $$primaryUpColor: '$colors$positive-up',
        $$primaryDownColor: '$colors$positive-down',
      },
      attention: {
        $$primaryColor: '$colors$attention',
        $$primaryUpColor: '$colors$attention-up',
        $$primaryDownColor: '$colors$attention-down',
      },
      negative: {
        $$primaryColor: '$colors$negative',
        $$primaryUpColor: '$colors$negative-up',
        $$primaryDownColor: '$colors$negative-down',
      },
      secondary: {
        $$primaryColor: '$colors$secondary',
        $$primaryUpColor: '$colors$secondary-up',
        $$primaryDownColor: '$colors$secondary-down',
      },
      current: {
        $$primaryColor: '$colors$secondary',
        $$primaryUpColor: '$colors$secondary-up',
        $$primaryDownColor: '$colors$secondary-down',

        '&:disabled': {
          $$textColor: '$colors$text',
          $$primaryColor: '$colors$secondary',
          $$primaryUpColor: '$colors$secondary-up',
          $$primaryDownColor: '$colors$secondary-down',
        },
      },
      loading: {
        $$textColor: '$colors$discreet-up',
        $$primaryColor: '$colors$discreet',
        $$primaryUpColor: '$colors$discreet-up',
        $$primaryDownColor: '$colors$discreet-down',

        color: '$$textColor',
        cursor: 'wait',

        '&:hover, &:active, &:disabled': {
          color: '$$textColor',
          filter: 'brightness(1)',
          cursor: 'wait',
        },
      },
    },
    leftIndicator: {
      true: {},
    },
    rightIndicator: {
      true: {},
    },
    underline: {
      true: {
        textDecoration: 'underline 4px',
        textUnderlineOffset: '1px',
      },
      false: {},
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
    padding: {
      default: {},
      none: {
        padding: '0',
      },
      smaller: {
        minHeight: 'auto',
        minWidth: 'auto',
        padding: '$1',
      },
      small: {
        padding: '$2',
      },
      medium: {
        padding: '$3',
      },
      large: {
        padding: '$4',
      },
      larger: {
        padding: '$5',
      },
      giant: {
        padding: '$9',
      },
    },
    radius: {
      default: {},
      small: {
        borderRadius: '$sm',
      },
      round: {
        borderRadius: '$full',
      },
      none: {
        borderRadius: 'unset',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'text',
      status: 'current',
      css: {
        $$textColor: '$colors$secondary-up',
      },
    },
  ],
});
