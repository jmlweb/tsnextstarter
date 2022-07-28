import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/layouts/CommonLayout';

import HomeScene from './Home.scene';

export default {
  title: 'Scenes/Home',
  component: HomeScene,
  decorators: [
    (Story) => (
      <CommonLayout>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof HomeScene>;

export const Home: ComponentStory<typeof HomeScene> = () => <HomeScene />;
