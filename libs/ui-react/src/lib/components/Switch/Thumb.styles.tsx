import { css } from '@routine/ui-web';

export const ThumbStyles = css({
  display: 'block',

  width: 21,
  height: 21,

  borderRadius: '$full',
  backgroundColor: '$text',
  boxShadow: '0px 0px 5px #0000007d',

  transition: 'transform 100ms',
  transform: 'translateX(0px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
  },
});
