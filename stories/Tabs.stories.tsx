import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../src/components/Tabs';
import { TabProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Tab',
    component: Tabs,
};

export default meta;

const Template: Story<TabProps> = args => <Tabs {...args} />;

export const HorizonatalTab = Template.bind({});

HorizonatalTab.args = {
    list: ['Tab 1', 'Tab 2'],
    panels: [<span>Content of Tab 1</span>, <span>Content of Tab 2</span>]
};

export const VerticalTab = Template.bind({});

VerticalTab.args = {
    list: ['Tab 1', 'Tab 2'],
    panels: [<span>Content of Tab 1</span>, <span>Content of Tab 2</span>],
    direction: 'vertical'
};
