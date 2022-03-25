import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Home } from 'react-feather';
import { Button } from '../src/components/Button';
import { ButtonProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Button',
    component: Button,
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Primary',
    theme: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Secondary',
    theme: 'secondary',
    icon: Home
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
    icon: Home,
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

export const PrimaryGhost = Template.bind({});

PrimaryGhost.args = {
    children: 'Primary',
    theme: 'primary',
    ghost: true
};

export const SecondaryGhost = Template.bind({});

SecondaryGhost.args = {
    children: 'Secondary',
    theme: 'secondary',
    ghost: true
};

export const Accent1Ghost = Template.bind({});

Accent1Ghost.args = {
    children: 'Accent 1',
    theme: 'accent1',
    ghost: true
};

export const Accent2Ghost = Template.bind({});

Accent2Ghost.args = {
    children: 'Accent 2',
    theme: 'accent2',
    ghost: true
};

export const SuccessGhost = Template.bind({});

SuccessGhost.args = {
    children: 'Success',
    theme: 'success',
    ghost: true
};

export const DangerGhost = Template.bind({});

DangerGhost.args = {
    children: 'Danger',
    theme: 'danger',
    ghost: true
};

export const WarningGhost = Template.bind({});

WarningGhost.args = {
    children: 'Warning',
    theme: 'warning',
    ghost: true
};
export const DarkGhost = Template.bind({});

DarkGhost.args = {
    children: 'Dark',
    theme: 'dark',
    ghost: true
};

export const LightGhost = Template.bind({});

LightGhost.args = {
    children: 'Light',
    theme: 'light',
    ghost: true
};

export const ButtonClick = Template.bind({});

ButtonClick.args = {
    children: 'Click Me',
    theme: 'primary',
    onClick: () => alert('Clicked')
};
