import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress } from '../src/components/Progress';
import { ProgressProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Progress',
    component: Progress,
};

export default meta;

const Template: Story<ProgressProps> = args => <Progress {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    theme: 'primary',
    percentage: 80,
    showPercentage: true
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Secondary',
    theme: 'secondary',
    percentage: 70,
    showPercentage: true
};

export const Accent1 = Template.bind({});

Accent1.args = {
    label: 'Accent 1',
    theme: 'accent1',
    percentage: 60,
    showPercentage: true
};

export const Accent2 = Template.bind({});

Accent2.args = {
    label: 'Accent 2',
    theme: 'accent2',
    percentage: 50,
    showPercentage: true
};

export const Success = Template.bind({});

Success.args = {
    label: 'Success',
    theme: 'success',
    percentage: 40,
    showPercentage: true
};

export const Danger = Template.bind({});

Danger.args = {
    label: 'Danger',
    theme: 'danger',
    percentage: 30,
    showPercentage: true
};

export const Dark = Template.bind({});

Dark.args = {
    label: 'Dark',
    theme: 'dark',
    percentage: 20,
    showPercentage: true
};

export const Light = Template.bind({});

Light.args = {
    label: 'Light',
    theme: 'light',
    percentage: 25,
    showPercentage: true
};

export const SimplePrimary = Template.bind({});

SimplePrimary.args = {
    theme: 'primary',
    percentage: 80,
    showPercentage: false
};

export const SimpleSecondary = Template.bind({});

SimpleSecondary.args = {
    theme: 'secondary',
    percentage: 60,
    showPercentage: false
};

export const SimpleSuccess = Template.bind({});

SimpleSuccess.args = {
    theme: 'success',
    percentage: 50,
    showPercentage: false
};

export const SimpleDanger = Template.bind({});

SimpleDanger.args = {
    theme: 'danger',
    percentage: 40,
    showPercentage: false
};
