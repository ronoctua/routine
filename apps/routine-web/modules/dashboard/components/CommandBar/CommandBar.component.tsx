import { StyledComponentProps } from '@routine/ui-react';
import { styled } from '@stitches/react';

import { CommandBarStyles } from './CommandBar.styles';

const StyledCommandBar = styled('div', CommandBarStyles);

export type CommandBarProps = StyledComponentProps<typeof StyledCommandBar> & {
  rightChildren: React.ReactNode;
};

export const CommandBar: React.FC<CommandBarProps> = ({
  children,
  rightChildren,
  ...props
}) => {
  return (
    <StyledCommandBar {...props}>
      <div data-id='left-children-container'>{children}</div>
      <div data-id='right-children-container'>{rightChildren}</div>
    </StyledCommandBar>
  );
};

CommandBar.displayName = 'CommandBar';
