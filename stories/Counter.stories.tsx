import React from 'react';
import { Home, User, BarChart2, Bell } from 'react-feather';
import { Meta, Story } from '@storybook/react';
import { Counter } from '../src/components/Counter';
import { CounterProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Counter',
    component: Counter,
};

export default meta;

const Template: Story<CounterProps> = args => <Counter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    icon: Home,
    count: 100,
    theme: 'primary',
    border: true
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Secondary',
    icon: User,
    count: 99,
    theme: 'secondary',
    border: true
};

export const Accent1 = Template.bind({});

Accent1.args = {
    label: 'Accent1',
    icon: Bell,
    count: 3,
    theme: 'accent1',
    border: true
};

export const Accent2 = Template.bind({});

Accent2.args = {
    label: 'Accent2',
    icon: BarChart2,
    count: 21,
    theme: 'accent2',
    border: true
};

export const Success = Template.bind({});

Success.args = {
    label: 'Success',
    icon: User,
    count: 100,
    theme: 'success',
    border: true
};

export const Danger = Template.bind({});

Danger.args = {
    label: 'Danger',
    icon: Bell,
    count: 99,
    theme: 'danger',
    border: true
};

export const Dark = Template.bind({});

Dark.args = {
    label: 'Dark',
    icon: User,
    count: 100,
    theme: 'dark',
    border: true
};

export const Light = Template.bind({});

Light.args = {
    label: 'Light',
    icon: BarChart2,
    count: 99,
    theme: 'light',
    border: true
};

