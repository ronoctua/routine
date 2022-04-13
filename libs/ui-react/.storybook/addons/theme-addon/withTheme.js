/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { globalStyles } from '@routine/ui-web';
import { useEffect } from '@storybook/addons';

import {
  CURRENT_THEME_KEY,
  ALL_THEMES_KEY,
  BACKGROUND_TYPE_KEY,
} from './constants';

export const withTheme = (Story, context) => {
  const { globals } = context;

  useEffect(() => {
    globalStyles();
  }, []);

  const handleBackgroundType = (backgroundType) => {
    if (backgroundType === 'Surface') {
      document.body.style.backgroundColor = 'var(--colors-surface)';
    } else {
      document.body.style.backgroundColor = 'var(--colors-background)';
    }
  };

  const handleThemeClassName = (newClassName, allClassNames) => {
    document.getElementsByTagName('html')[0].classList.remove(...allClassNames);
    document.getElementsByTagName('html')[0].classList.add(newClassName);
  };

  useEffect(() => {
    if (globals && globals[BACKGROUND_TYPE_KEY]) {
      handleBackgroundType(globals[BACKGROUND_TYPE_KEY]);
    } else {
      document.body.style.backgroundColor = 'var(--colors-background)';
    }

    if (globals && globals[CURRENT_THEME_KEY] && globals[ALL_THEMES_KEY]) {
      const currentThemeClassName = globals[CURRENT_THEME_KEY];
      const allThemesClassName = globals[ALL_THEMES_KEY];

      handleThemeClassName(currentThemeClassName, allThemesClassName);
    }
  }, [globals, handleThemeClassName, handleBackgroundType]);

  return <Story {...context} />;
};
