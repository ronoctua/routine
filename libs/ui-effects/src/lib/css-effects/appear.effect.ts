import { keyframes, css } from '@routine/ui-web';

export const appearKeyframes = keyframes({
  '0%': { opacity: '$transparent' },
  '100%': { opacity: 'none' },
});

export const appearEffect = css({
  animation: `${appearKeyframes} 1s linear`,
});
