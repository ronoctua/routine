import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { TextFieldStyles } from './TextField.styles';

const StyledInputTextField = styled('input', TextFieldStyles);
const StyledTextAreaTextField = styled('textarea', TextFieldStyles);
const StyledDivTextField = styled('div', TextFieldStyles);

export type TextFieldRefType = ElementRef<typeof StyledInputTextField> &
  ElementRef<typeof StyledTextAreaTextField> &
  ElementRef<typeof StyledDivTextField>;

export type TextFieldProps = StyledComponentProps<typeof StyledInputTextField> &
  StyledComponentProps<typeof StyledTextAreaTextField> &
  StyledComponentProps<typeof StyledDivTextField>;

/**
 * TextField component
 *
 * @param variant - TextField variant.
 * @param status - TextField status.
 * @param padding - Padding size.
 * @param radius - Radius size.
 * @param border - Border size.
 * @param fullWidth - Full width.
 * @param fullHeight - Full height.
 * @param resizable - Makes TextField resizable.
 */
export const TextField = forwardRef<TextFieldRefType, TextFieldProps>(
  ({ variant, children, ...props }, forwardRef) => {
    if (variant === 'div') {
      return (
        <StyledDivTextField
          ref={forwardRef}
          contentEditable
          role="textbox"
          {...props}>
          {children}
        </StyledDivTextField>
      );
    }

    if (variant === 'textarea') {
      return (
        <StyledTextAreaTextField ref={forwardRef} {...props}>
          {children}
        </StyledTextAreaTextField>
      );
    }

    return (
      <StyledInputTextField type="text" ref={forwardRef} {...props}>
        {children}
      </StyledInputTextField>
    );
  },
);

TextField.displayName = 'TextField';
