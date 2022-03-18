import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from '../src/components/Alert';

const meta: Meta = {
    title: 'Alert',
    component: Alert,
};

export default meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Primary',
    theme: 'primary',
    showIcon: true
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Secondary',
    theme: 'secondary',
    showIcon: true
};

export const Accent1 = Template.bind({});

Accent1.args = {
    children: 'Accent 1',
    theme: 'accent1',
    showIcon: true
};

export const Accent2 = Template.bind({});

Accent2.args = {
    children: 'Accent 2',
    theme: 'accent2',
    showIcon: true
};

export const Success = Template.bind({});

Success.args = {
    children: 'Success',
    theme: 'success',
    showIcon: true
};

export const Danger = Template.bind({});

Danger.args = {
    children: 'Danger',
    theme: 'danger',
    showIcon: true
};

export const Warning = Template.bind({});

Warning.args = {
    children: 'Warning',
    theme: 'warning',
    showIcon: true
};
export const Dark = Template.bind({});

Dark.args = {
    children: 'Dark',
    theme: 'dark',
    showIcon: true
};

export const Light = Template.bind({});

Light.args = {
    children: 'Light',
    theme: 'light',
    showIcon: true
};

export const PrimaryWithoutIcon = Template.bind({});

PrimaryWithoutIcon.args = {
    children: 'Primary without Icon',
    theme: 'primary',
    showIcon: false
};

