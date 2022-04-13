import { rotateEffect } from '@routine/ui-effects';
import { SOLCircleRight, SOLCircleLeft, SOLSpinner } from '@routine/ui-icons';
import { styled } from '@routine/ui-web';
import { forwardRef, ReactElement, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { Icon } from '../Icon';
import { ButtonStyles } from './Button.styles';

const StyledButton = styled('button', ButtonStyles);

export type ButtonProps = StyledComponentProps<typeof StyledButton> & {
  leftIcon?: ReactElement | null;
  rightIcon?: ReactElement | null;
};

/**
 * Button component
 *
 * @param variant - Button design variation.
 * @param status - Button current status.
 * @param fullWidth - Full width.
 * @param fullHeight - Full height.
 * @param padding - Padding size.
 * @param radius - Radius size.
 * @param underline - Underline in the text.
 * @param leftIndicator - Shows an indication mark on the left side of the button.
 * @param rightIndicator - Shows an indication mark on the right side of the button.
 * @param leftIcon - Set an icon on the left side of the button.
 * @param rightIcon - Set an icon on the right side of the button.
 */
export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  (
    {
      children,
      status,
      disabled,
      leftIndicator,
      rightIndicator,
      leftIcon,
      rightIcon,
      ...props
    },
    forwardRef,
  ) => {
    return (
      <StyledButton
        ref={forwardRef}
        status={status}
        disabled={disabled || status === 'loading'}
        {...props}>
        {leftIndicator && (
          <Icon>
            <SOLCircleRight />
          </Icon>
        )}

        {leftIcon && <Icon>{leftIcon}</Icon>}
        {children}
        {rightIcon && <Icon>{rightIcon}</Icon>}

        {status && status === 'loading' && (
          <Icon className={rotateEffect()}>
            <SOLSpinner />
          </Icon>
        )}

        {rightIndicator && (
          <Icon>
            <SOLCircleLeft />
          </Icon>
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
