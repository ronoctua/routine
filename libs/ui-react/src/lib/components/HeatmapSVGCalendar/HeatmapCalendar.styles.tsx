import { css } from '@routine/ui-web';

export const HeatmapCalendarStyles = css({
  display: 'block',
  width: '100%',
  height: 'auto',

  text: {
    fontSize: '0.35em',
    fontWeight: 'bold',
    fill: '$text',
  },

  rect: {
    fill: '$surface-up',

    '&.transparent': {
      fill: 'transparent',
    },
  },

  '.mark-one, .mark-two, .mark-three': {
    fill: '$text',
  },

  '.color-scale-0, .color-scale-1, .color-scale-2,.color-scale-3, .color-scale-4, .color-scale-5':
    {
      fill: '$negative',
      color: '$negative-up',
    },

  '.color-scale-6, .color-scale-7, .color-scale-8, .color-scale-9': {
    fill: '$attention',
    color: '$attention-up',
  },

  '.color-scale-10': {
    fill: '$positive',
    color: '$positive-up',
  },
});
