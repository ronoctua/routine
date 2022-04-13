import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@routine/ui-web';

import { StyledComponentProps } from '../../types/styled-component.types';
import { SwitchStyles } from './Switch.styles';
import { ThumbStyles } from './Thumb.styles';

const StyledSwitch = styled(SwitchPrimitive.Root, SwitchStyles);
const StyledThumb = styled(SwitchPrimitive.Thumb, ThumbStyles);

export type SwitchProps = StyledComponentProps<typeof StyledSwitch>;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <StyledSwitch {...props}>
      <StyledThumb />
    </StyledSwitch>
  );
};

Switch.displayName = 'Switch';
