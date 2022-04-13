import { themes } from '@routine/ui-web';

let themeArray = {
  themes: [],
  themesClassName: [],
};

for (const key in themes) {
  const { className, colors } = themes[key];

  themeArray.themes.push({
    className,
    primaryColor: colors.background.value,
    backgroundColor: colors.primary.value,
  });

  themeArray.themesClassName.push(className);
}

export const parameters = {
  appThemes: themeArray,
  options: {
    storySort: {
      // Sort order issue: https://github.com/storybookjs/storybook/issues/16573
      order: [
        'Intro',
        'Form',
        ['*', ['Default', '*']],
        '*',
        ['*', ['Default', '*']],
      ],
    },
  },
};
