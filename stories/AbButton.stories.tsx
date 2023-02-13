import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbButton, AbButtonProps } from '../src/components/AbButton';

export default {
  title: 'Components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary Button',
  buttonType: 'primary',
} as AbButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary Button',
  buttonType: 'secondary',
} as AbButtonProps;
