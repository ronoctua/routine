import { styled } from '@routine/ui-web';
import { forwardRef, ElementRef } from 'react';

import { StyledComponentProps } from '../../types/styled-component.types';
import { SurfaceStyles } from './Surface.styles';

const StyledSurface = styled('div', SurfaceStyles);

export type SurfaceProps = StyledComponentProps<typeof StyledSurface>;

/**
 * Surface component
 *
 * @param status - Surface status.
 * @param padding - Surface padding.
 * @param radius - Surface radius.
 * @param border - Surface border.
 * @param direction - Surface direction.
 * @param fullWidth - Surface full width.
 * @param fullHeight - Surface full height.
 * @param centerContent - Center content.
 * @param secondaryText - Sets secondary text color.
 */
export const Surface = forwardRef<
  ElementRef<typeof StyledSurface>,
  SurfaceProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyledSurface ref={forwardRef} {...props}>
      {children}
    </StyledSurface>
  );
});

Surface.displayName = 'Surface';
