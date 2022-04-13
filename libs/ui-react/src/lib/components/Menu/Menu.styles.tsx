import { css } from '@routine/ui-web';

export const MenuContentStyles = css({
  zIndex: 99999,
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',

  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  background: '$background-down',

  defaultVariants: {
    contentPosition: 'left',
  },

  variants: {
    display: {
      true: {},
      false: {
        display: 'none',
      },
    },

    contentPosition: {
      left: {
        '[data-id="menu-content-wrapper"]': {
          alignItems: 'flex-start',
          textAlign: 'left',
        },
      },
      right: {
        '[data-id="menu-content-wrapper"]': {
          alignItems: 'flex-end',
          textAlign: 'right',
        },
      },
      bottomLeft: {
        flexDirection: 'column-reverse',
        '[data-id="menu-content-wrapper"]': {
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          textAlign: 'left',
        },
      },
      bottomRight: {
        flexDirection: 'column-reverse',
        '[data-id="menu-content-wrapper"]': {
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          textAlign: 'right',
        },
      },
      center: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
});

export const MenuContentWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  width: '100%',
});
