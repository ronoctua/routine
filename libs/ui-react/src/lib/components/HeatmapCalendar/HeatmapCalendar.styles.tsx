import { css } from '@routine/ui-web';

export const HeatmapCalendarStyles = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  '.color-scale-0, .color-scale-1, .color-scale-2,.color-scale-3, .color-scale-4, .color-scale-5':
    {
      color: '$negative-up',
      background: '$negative',
    },

  '.color-scale-6, .color-scale-7, .color-scale-8, .color-scale-9': {
    color: '$attention-up',
    background: '$attention',
  },

  '.color-scale-10': {
    color: '$positive-up',
    background: '$positive',
  },

  '.color-empty': {
    color: '$text-secondary',
    background: '$surface',
  },

  '[data-class="heatmap-tooltip-container"]': {
    display: 'flex',
    flexDirection: 'row',

    gap: '$3',
    minHeight: '60px',
    padding: '$2',
    fontSize: '$sm',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',

      '[data-class="title"]': {
        textTransform: 'capitalize',
      },

      '[data-class="total-percentage"]': {
        textAlign: 'center',
      },
    },
  },

  '[data-class="heatmap-day-element"]': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '40px',
    height: '40px',

    cursor: 'default',
  },

  '[data-class="heatmap-content-container"]': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',

    height: '86px',
    gap: '3px',
    margin: '0 auto',
    overflow: 'hidden',

    '&:hover': {
      paddingLeft: '10px; -moz-padding-start: 12px;',
      overflowY: 'auto',
    },
  },

  '@media (min-width: 1340px)': {
    minWidth: '1325px',

    '[data-class="heatmap-content-container"]': {
      width: '1325px',

      '&:hover': {
        paddingLeft: '0; -moz-padding-start: 0;',
      },
    },
  },

  '@media (max-width: 1340px)': {
    minWidth: '680px',

    '[data-class="heatmap-content-container"]': {
      width: '680px',
    },
  },

  '@media (max-width: 710px)': {
    minWidth: '456px',

    '[data-class="heatmap-content-container"]': {
      width: '456px',
    },
  },

  '@media (max-width: 480px)': {
    minWidth: '290px',

    '[data-class="heatmap-content-container"]': {
      width: '290px',
    },
  },

  '@media (max-width: 320px)': {
    minWidth: '290px',

    '[data-class="heatmap-content-container"]': {
      width: '290px',
    },
  },

  '@media (max-width: 310px)': {
    minWidth: '160px',

    '[data-class="heatmap-content-container"]': {
      width: '160px',
    },
  },
});
