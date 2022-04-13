import { css } from '@routine/ui-web';

export const CheckboxStyles = css({
  position: 'relative',
  appearance: 'none',

  $$dimensions: '2em',
  minWidth: '$$dimensions',
  minHeight: '$$dimensions',
  width: '$$dimensions',
  height: '$$dimensions',
  border: '2px solid $text-secondary',

  borderRadius: '4px',
  outline: '0',
  cursor: 'pointer',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',

    borderWidth: '0 2px 2px 0',

    borderStyle: 'solid',
    borderColor: '$text',
    transform: 'rotate(45deg)',
    opacity: '0',
  },

  '&:checked': {
    color: '$text',
    borderColor: '$primary',
    background: '$primary',

    '&::before': {
      opacity: '1',
    },

    '~ label::before': {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    },
  },

  defaultVariants: {
    size: 'medium',
  },

  variants: {
    size: {
      small: {
        $$dimensions: '1.2em',

        '&::before': {
          top: '-0.2px',
          left: '2px',
          width: '8px',
          height: '10px',
        },
      },
      medium: {
        $$dimensions: '2em',

        '&::before': {
          top: '1px',
          left: '7px',
          width: '9px',
          height: '16px',
        },
      },
    },
  },
});
