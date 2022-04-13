import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { LabelStyles } from './Label.styles';

const StyledLabel = styled('label', LabelStyles);

export type LabelProps = StyledComponentProps<typeof StyledLabel>;

/**
 * Label component
 *
 * @param horizontal - Horizontal alignment.
 * @param fullWidth - Full width.
 * @param fullHeight - Full height.
 * @param centerContent - Center content.
 * @param underline - Underline in the text.
 */
export const Label = forwardRef<ElementRef<typeof StyledLabel>, LabelProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyledLabel ref={forwardRef} {...props}>
        {children}
      </StyledLabel>
    );
  },
);

Label.displayName = 'Label';
