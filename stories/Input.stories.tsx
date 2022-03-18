import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src/components/Input';

const meta: Meta = {
    title: 'Input',
    component: Input,
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
    type: 'text',
    label: 'Input Text',
    placeholder: 'Input Text',
    name: 'text',
    register: () => { },
    required: true
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    name: 'password',
    register: () => { },
    required: true
};
