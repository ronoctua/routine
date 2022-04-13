import { css } from '@routine/ui-web';

export const SettingsLanguagePageContentStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flex: 1,

  gap: '$2',
  padding: '$3',

  '[data-class="label"]': {
    paddingRight: '$2',
  },
});
