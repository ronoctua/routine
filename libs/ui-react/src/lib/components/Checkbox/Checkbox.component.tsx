import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { CheckboxStyles } from './Checkbox.styles';

const StyledCheckbox = styled('input', CheckboxStyles);

export type CheckboxProps = StyledComponentProps<typeof StyledCheckbox>;

/**
 * Checkbox component
 *
 * @param checked - Checked state.
 * @param size - Checkbox size.
 */
export const Checkbox = forwardRef<
  ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>(({ ...props }, forwardRef) => {
  return <StyledCheckbox type="checkbox" ref={forwardRef} {...props} />;
});

Checkbox.displayName = 'Checkbox';
