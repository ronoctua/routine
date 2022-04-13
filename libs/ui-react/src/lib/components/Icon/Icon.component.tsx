import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { IconStyles } from './Icon.styles';

const StyledIcon = styled('span', IconStyles);

export type IconProps = StyledComponentProps<typeof StyledIcon>;

export const Icon = forwardRef<ElementRef<typeof StyledIcon>, IconProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyledIcon ref={forwardRef} {...props}>
        {children}
      </StyledIcon>
    );
  },
);

Icon.displayName = 'Icon';
