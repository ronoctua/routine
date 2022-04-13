import { css } from '@routine/ui-web';

export const SettingsPageContentStyles = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',
  padding: '$3',

  '[data-class="label"]': {
    paddingRight: '$2',
  },
});
