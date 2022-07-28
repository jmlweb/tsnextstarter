import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/layouts/CommonLayout';

import Home from './Home.scene';

export default {
  title: 'Scenes/Home',
  component: Home,
  decorators: [
    (Story) => (
      <CommonLayout>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof Home>;

export const HomeScene: ComponentStory<typeof Home> = () => <Home />;
