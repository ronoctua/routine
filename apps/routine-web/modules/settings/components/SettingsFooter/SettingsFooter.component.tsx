import { Surface } from '@routine/ui-react';

import { CommandBar } from '../../../dashboard/components/CommandBar';
import { DashboardMenu } from '../../../dashboard/components/DashboardMenu';

export const SettingsFooter = () => {
  return (
    <CommandBar
      rightChildrenDirection="column"
      rightChildren={
        <DashboardMenu />
        // <Button variant="ghost" radius="none" status={'loading'} disabled />
      }>
      <Surface
        border="none"
        padding="none"
        radius="none"
        fullWidth
        centerContent
        secondaryText>
        {/* status messages come here */}
      </Surface>
    </CommandBar>
  );
};
