import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Home } from 'react-feather';
import { Badge, BadgeProps } from '../src/components/Badge';

const meta: Meta = {
    title: 'Badge',
    component: Badge,
};

export default meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    count: 1,
    theme: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    icon: Home,
    theme: 'secondary'
};

export const Accent1 = Template.bind({});

Accent1.args = {
    count: 3,
    theme: 'accent1'
};

export const Accent2 = Template.bind({});

Accent2.args = {
    count: 8,
    theme: 'accent2'
};

export const Success = Template.bind({});

Success.args = {
    count: 7,
    theme: 'success'
};

export const Danger = Template.bind({});

Danger.args = {
    count: 11,
    theme: 'danger'
};

export const Warning = Template.bind({});

Warning.args = {
    count: 15,
    theme: 'warning'
};
export const Dark = Template.bind({});

Dark.args = {
    count: 1,
    theme: 'dark'
};

export const Light = Template.bind({});

Light.args = {
    count: 2,
    theme: 'light'
};
