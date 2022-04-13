import { useParameter, useGlobals } from '@storybook/api';
import { IconButton, Icons } from '@storybook/components';
import React, { memo } from 'react';

import {
  CURRENT_THEME_KEY,
  ALL_THEMES_KEY,
  BACKGROUND_TYPE_KEY,
} from './constants';

export const ThemeComponent = memo((active) => {
  const [globals, setGlobals] = useGlobals();
  const appThemes = useParameter('appThemes', null);

  if (
    !active ||
    !appThemes ||
    !appThemes.themes ||
    !appThemes.themesClassName
  ) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  const { themes, themesClassName } = appThemes;

  if (
    !globals ||
    !globals[CURRENT_THEME_KEY] ||
    !globals[ALL_THEMES_KEY] ||
    !globals[BACKGROUND_TYPE_KEY]
  ) {
    setGlobals({
      [CURRENT_THEME_KEY]: globals[CURRENT_THEME_KEY] || null,
      [ALL_THEMES_KEY]: globals[ALL_THEMES_KEY] || themesClassName,
      [BACKGROUND_TYPE_KEY]: globals[BACKGROUND_TYPE_KEY] || 'Background',
    });
  }

  let themeButtons = [];

  const handleBackgroundType = () => {
    const oldBackgroundType = globals[BACKGROUND_TYPE_KEY];

    setGlobals({
      ...globals,
      [BACKGROUND_TYPE_KEY]:
        oldBackgroundType === 'Background' ? 'Surface' : 'Background',
    });
  };

  const handleThemeChange = (currentClassName) => {
    setGlobals({
      ...globals,
      [CURRENT_THEME_KEY]: currentClassName,
      [ALL_THEMES_KEY]: themesClassName,
    });
  };

  for (const theme of themes) {
    const { className, primaryColor, backgroundColor } = theme;

    themeButtons.push(
      <IconButton
        key={className}
        title={className}
        onClick={() => handleThemeChange(className)}
        style={{
          minWidth: '28px',
          border: '1px solid rgb(96 96 96 / 50%)',
          background: primaryColor,
        }}>
        <div
          style={{
            width: '0.7em',
            height: '0.7em',
            background: backgroundColor,
            borderRadius: '999px',
          }}
        />
      </IconButton>,
    );
  }

  themeButtons.push(
    <IconButton
      key="background-type-button"
      title={globals[BACKGROUND_TYPE_KEY]}
      onClick={handleBackgroundType}>
      <Icons icon="mirror" style={{ paddingRight: '4px' }} />{' '}
      {globals[BACKGROUND_TYPE_KEY]}
    </IconButton>,
  );

  return themeButtons.map((button) => button);
});
