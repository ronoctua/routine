import { css } from '@routine/ui-web';

export const DashboardStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr auto',
  gridTemplateAreas: `
    'main'
    'footer'
  `,

  height: '100vh',
  width: '100vw',

  main: {
    gridArea: 'main',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',

    width: '100vw',
  },

  footer: {
    gridArea: 'footer',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '$footer',
    bottom: '0',

    flex: '1',
    width: '100vw',
    borderTop: '2px solid $surface-up',

    boxShadow: '$topStrong',
  },
});
