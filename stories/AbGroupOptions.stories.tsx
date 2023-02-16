import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  AbOptionsGroup,
  AbOptionsGroupProps,
} from '../src/components/AbOptionsGroup';

export default {
  title: 'Components/AbOptionsGroup',
  component: AbOptionsGroup,
} as ComponentMeta<typeof AbOptionsGroup>;

const Template: ComponentStory<typeof AbOptionsGroup> = args => (
  <AbOptionsGroup {...args} />
);

export const Selected = Template.bind({});

Selected.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso e E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as AbOptionsGroupProps;

export const DefaultOption = Template.bind({});

DefaultOption.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso e E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
  defaultOption: {
    id: 2,
    title: 'Impresso',
    body: 'R$ 00,00',
    footer: '.pdf, .epub, .mob',
  },
} as AbOptionsGroupProps;
