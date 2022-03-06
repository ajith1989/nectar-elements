import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BarChart2 } from 'react-feather';
import { Avatar, AvatarProps } from '../src/components/Avatar';


const meta: Meta = {
    title: 'Avatar',
    component: Avatar,
};

export default meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Primary',
    theme: 'primary'
};

export const PrimaryWithIcon = Template.bind({});

PrimaryWithIcon.args = {
    icon: BarChart2,
    theme: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Secondary',
    theme: 'secondary'
};

export const Accent1 = Template.bind({});

Accent1.args = {
    children: 'Accent 1',
    theme: 'accent1'
};

export const Accent2 = Template.bind({});

Accent2.args = {
    children: 'Accent 2',
    theme: 'accent2'
};

export const Success = Template.bind({});

Success.args = {
    children: 'Success',
    theme: 'success'
};

export const Danger = Template.bind({});

Danger.args = {
    children: 'Danger',
    theme: 'danger'
};

export const Warning = Template.bind({});

Warning.args = {
    children: 'Warning',
    theme: 'warning'
};
export const Dark = Template.bind({});

Dark.args = {
    children: 'Dark',
    theme: 'dark'
};

export const Light = Template.bind({});

Light.args = {
    children: 'Light',
    theme: 'light'
};

export const PrimaryRounded = Template.bind({});

PrimaryRounded.args = {
    children: 'Primary',
    theme: 'primary',
    rounded: true
};

export const SecondaryRounded = Template.bind({});

SecondaryRounded.args = {
    children: 'Secondary',
    theme: 'secondary',
    rounded: true
};

export const Accent1Rounded = Template.bind({});

Accent1Rounded.args = {
    icon: BarChart2,
    theme: 'accent1',
    rounded: true
};

export const Accent2Rounded = Template.bind({});

Accent2Rounded.args = {
    children: 'Accent 2',
    theme: 'accent2',
    rounded: true
};

export const SuccessRounded = Template.bind({});

SuccessRounded.args = {
    children: 'Success',
    theme: 'success',
    rounded: true
};

export const DangerRounded = Template.bind({});

DangerRounded.args = {
    children: 'Danger',
    theme: 'danger',
    rounded: true
};

export const WarningRounded = Template.bind({});

WarningRounded.args = {
    children: 'Warning',
    theme: 'warning',
    rounded: true
};
export const DarkRounded = Template.bind({});

DarkRounded.args = {
    children: 'Dark',
    theme: 'dark',
    rounded: true
};

export const LightRounded = Template.bind({});

LightRounded.args = {
    children: 'Light',
    theme: 'light',
    rounded: true
};



