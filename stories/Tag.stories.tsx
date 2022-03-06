import React from 'react';
import { User } from 'react-feather';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../src/components/Tag';

const meta: Meta = {
    title: 'Tag',
    component: Tag,
};

export default meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Primary',
    theme: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Secondary',
    theme: 'secondary',
    icon: User
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
