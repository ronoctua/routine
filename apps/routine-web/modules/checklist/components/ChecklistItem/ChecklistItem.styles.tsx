import { css } from '@routine/ui-web';

export const ChecklistItemStyles = css({
  $$textColor: '$colors$text',
  $$primaryColor: '$colors$primary',
  $$primaryUpColor: '$colors$primary-up',
  $$primaryDownColor: '$colors$primary-down',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  flex: 1,
  minHeight: '54px',
  width: 'auto',
  gap: '4px',

  listStyle: 'none',

  '[data-class="item-left-controls"]': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    minHeight: '54px',
    gap: '4px',
  },

  '[data-class="item-content"]': {
    alignItems: 'center',

    minHeight: '70px',

    cursor: 'pointer',
  },

  '[data-is-done="true"]': {
    textDecoration: 'line-through',
    textDecorationThickness: '3px',
  },

  '[data-is-dragged="true"]': {
    cursor: 'grabbing',
  },

  '[data-is-dragged="false"]': {
    cursor: 'grab',
  },

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

    'span[data-movable-handle="true"]': {
      display: 'none',
    },

    '&:hover, &:active': {
      color: '$$textColor',
      filter: 'brightness(1)',
    },
  },

  variants: {
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
    underline: {
      true: {
        textDecoration: 'underline 4px',
        textUnderlineOffset: '1px',
      },
      false: {},
    },
  },
});
