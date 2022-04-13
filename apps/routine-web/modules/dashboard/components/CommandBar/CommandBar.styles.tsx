import { css } from '@routine/ui-web';

export const CommandBarStyles = css({
  display: 'flex',

  flex: '1',
  minHeight: '38px',
  maxHeight: '34vh',
  width: '100%',

  background: '$surface',

  '[data-id="left-children-container"]': {
    display: 'flex',

    flex: 1,
  },

  '[data-id="right-children-container"]': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    flex: 0,
  },

  defaultVariants: {
    rightChildrenDirection: 'row',
  },

  variants: {
    rightChildrenDirection: {
      column: {
        '[data-id="right-children-container"]': {
          flexDirection: 'column',
        },
      },
      row: {
        '[data-id="right-children-container"]': {
          flexDirection: 'row',
        },
      },
    },
  },
});
