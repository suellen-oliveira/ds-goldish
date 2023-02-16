import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputText, InputFieldProps } from '../src/components/AbInputText';

export default {
  title: 'Components/AbInputText',
  component: AbInputText,
  argTypes: {
    label: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof AbInputText>;

const Template: ComponentStory<typeof AbInputText> = args => (
  <AbInputText {...args} />
);

export const Input = Template.bind({});

Input.args = {
  label: 'Uma label interessante',
} as InputFieldProps;
