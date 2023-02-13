import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTag, AbTagProps } from '../src/components/AbTag';

export default {
  title: 'Components/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  text: 'Marketing Digital',
} as AbTagProps;
