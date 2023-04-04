import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) =>
  <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Text'
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
