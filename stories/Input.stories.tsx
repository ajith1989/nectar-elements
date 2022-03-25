import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src/components/Input';
import { InputProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Input',
    component: Input,
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Text = Template.bind({});

Text.args = {
    type: 'text',
    label: 'Input Text',
    placeholder: 'Input Text',
    name: 'text',
    register: () => { },
    required: true
};

export const Password = Template.bind({});

Password.args = {
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    name: 'password',
    register: () => { },
    required: true
};

export const Email = Template.bind({});

Email.args = {
    type: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    name: 'email',
    register: () => { },
    required: true
};

export const Telephone = Template.bind({});

Telephone.args = {
    type: 'tel',
    label: 'Mobile',
    placeholder: 'Mobile',
    name: 'mobile',
    register: () => { },
    required: true,
    minLength: 10,
    maxLength: 12
};

export const Number = Template.bind({});

Number.args = {
    type: 'number',
    label: 'Number',
    placeholder: 'Number',
    name: 'number',
    register: () => { },
    required: true
};

export const Date = Template.bind({});

Date.args = {
    type: 'date',
    label: 'Date',
    placeholder: 'Date',
    name: 'date',
    register: () => { },
    required: true
};

export const DateTime = Template.bind({});

DateTime.args = {
    type: 'datetime-local',
    label: 'Date Time',
    placeholder: 'Date Time',
    name: 'datetime',
    register: () => { },
    required: true
};

export const Color = Template.bind({});

Color.args = {
    type: 'color',
    label: 'Choose Color',
    name: 'color',
    register: () => { },
    required: true
};

export const Checkbox = Template.bind({});

Checkbox.args = {
    type: 'checkbox',
    label: 'Checkbox',
    name: 'checkbox',
    register: () => { },
    required: true
};

export const Radio = Template.bind({});

Radio.args = {
    type: 'radio',
    label: 'Radio',
    name: 'Radio',
    register: () => { },
    required: true
};

export const Select = Template.bind({});

Select.args = {
    type: 'select',
    label: 'Select',
    placeholder: 'Choose',
    name: 'select',
    options: ["Yes", "No"],
    register: () => { },
    required: true
};

export const MultipleSelect = Template.bind({});

MultipleSelect.args = {
    type: 'select',
    label: 'Select',
    placeholder: 'Choose',
    name: 'select',
    options: ["Yes", "No"],
    register: () => { },
    required: true,
    multiple: true
};

export const TextArea = Template.bind({});

TextArea.args = {
    type: 'textarea',
    label: 'Text Area',
    placeholder: 'Text Area',
    name: 'textarea',
    register: () => { },
    required: true,
};
