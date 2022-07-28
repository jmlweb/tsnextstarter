import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/layouts/CommonLayout';

import CardComponent from './Card';

export default {
  title: 'components/Card',
  component: CardComponent,
  decorators: [
    (Story) => (
      <CommonLayout>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const Card = Template.bind({});

Card.args = {
  title: 'Card component',
  excerpt: 'Use this component to present info in an organized manner',
  href: 'http://jmlweb.es',
};
