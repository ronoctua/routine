import { SOLSun, SOLGear, SOLBolt } from '@routine/ui-icons';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button.component';

const IconArgs = {
  options: ['none', 'SolidSun', 'SolidGear', 'SolidBolt'],
  mapping: {
    none: null,
    SolidSun: <SOLSun />,
    SolidGear: <SOLGear />,
    SolidBolt: <SOLBolt />,
  },
  control: {
    type: 'select',
    labels: {
      none: 'no icon',
      SolidSun: 'solid sun',
      SolidGear: 'solid gear',
      SolidBolt: 'solid bolt',
    },
  },
};

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['button', 'outlined', 'ghost', 'link', 'text'],
      control: { type: 'inline-radio' },
    },
    status: {
      options: [
        'default',
        'positive',
        'attention',
        'negative',
        'secondary',
        'current',
        'loading',
      ],
      control: { type: 'inline-radio' },
    },
    padding: {
      options: [
        'default',
        'smaller',
        'small',
        'medium',
        'large',
        'larger',
        'giant',
        'none',
      ],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['default', 'small', 'round', 'none'],
      control: { type: 'inline-radio' },
    },
    leftIndicator: {
      control: { type: 'boolean' },
    },
    rightIndicator: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    fullHeight: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    leftIcon: IconArgs,
    rightIcon: IconArgs,
  },
  args: {
    variant: 'button',
    status: 'default',
    padding: 'default',
    radius: 'default',
    leftIndicator: false,
    rightIndicator: false,
    underline: false,
    fullWidth: false,
    fullHeight: false,
    disabled: false,
    leftIcon: null,
    rightIcon: null,
    children: 'Button',
  },
  includeStories: /^[A-Z]/,
  excludeStories: /^[a-z]/,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'button',
};
