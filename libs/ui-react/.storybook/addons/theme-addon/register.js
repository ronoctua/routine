import { addons, types } from '@storybook/addons';
import React from 'react';

import { ADDON_ID, TOOLBAR_ID } from './constants';
import { ThemeComponent } from './ThemeComponent';

addons.register(ADDON_ID, (api) => {
  addons.add(TOOLBAR_ID, {
    type: types.TOOL,
    title: 'Themes',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ({ active }) => <ThemeComponent active={active} />,
  });
});
