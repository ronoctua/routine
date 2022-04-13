import { keyframes, css } from '@routine/ui-web';

export const rotateKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const rotateEffect = css({
  animation: `${rotateKeyframes} 1s linear infinite`,
});
