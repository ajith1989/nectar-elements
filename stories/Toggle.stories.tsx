import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle } from '../src/components/Toggle';
import { ToggleProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Toggle',
    component: Toggle,
};

export default meta;

const Template: Story<ToggleProps> = args => <Toggle {...args} />;

export const Default = Template.bind({});

Default.args = {
    checked: false
};

export const Checked = Template.bind({});

Checked.args = {
    checked: true
};


export const ToggleWithLabel = Template.bind({});

ToggleWithLabel.args = {
    label: 'Toggle With Label',
    checked: true
};

export const Success = Template.bind({});

Success.args = {
    checked: true,
    theme: 'success'
};

export const Danger = Template.bind({});

Danger.args = {
    checked: true,
    theme: 'danger'
};


