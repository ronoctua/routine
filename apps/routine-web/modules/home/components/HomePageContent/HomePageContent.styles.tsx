import { css } from '@routine/ui-web';

export const HomePageContentStyles = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',
  padding: '$3',

  '[data-class="label"]': {
    paddingRight: '$2',
  },
});
