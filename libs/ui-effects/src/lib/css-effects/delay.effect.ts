import { keyframes, css } from '@routine/ui-web';

export const delayKeyframes = keyframes({
  '0%': { opacity: '$transparent' },
  '90%': { opacity: '$transparent' },
  '100%': { opacity: 'none' },
});

export const delayEffect = css({
  animation: `${delayKeyframes} 2s linear`,
});
