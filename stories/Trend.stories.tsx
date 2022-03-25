import React from 'react';
import { Home, User, BarChart2, Bell } from 'react-feather';
import { Meta, Story } from '@storybook/react';
import { Trend } from '../src/components/Trend';
import { TrendProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Trend',
    component: Trend,
};

export default meta;

const Template: Story<TrendProps> = args => <Trend {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    icon: Home,
    label: 'Primary',
    meta: 'Meta',
    count: 99,
    theme: 'primary',
    border: true,
    trend: 'up',
    extra: 'Additional Information'
};

export const Secondary = Template.bind({});

Secondary.args = {
    icon: BarChart2,
    label: 'Secondary',
    meta: 'Meta',
    count: 100,
    theme: 'secondary',
    border: true,
    trend: 'down',
};
