import React from 'react';
import { Home, BarChart2, User } from 'react-feather';
import { Meta, Story } from '@storybook/react';
import { Typography } from '../src/components/Typography';
import { TypographyProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Typography',
    component: Typography,
};

export default meta;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const Caption = Template.bind({});

Caption.args = {
    children: 'Caption',
    type: 'caption',
    theme: 'primary',
};

export const Header = Template.bind({});

Header.args = {
    children: 'Header',
    type: 'header',
    theme: 'secondary',
    icon: BarChart2
};

export const Title = Template.bind({});

Title.args = {
    children: 'Title',
    type: 'title',
    theme: 'dark',
};

export const SubTitle = Template.bind({});

SubTitle.args = {
    children: 'Sub Title',
    type: 'subtitle',
    theme: 'dark',
    icon: User
};

export const Headline = Template.bind({});

Headline.args = {
    children: 'Headline',
    type: 'headline',
    theme: 'dark',
};

export const Body = Template.bind({});

Body.args = {
    children: 'Body',
    type: 'body',
    theme: 'dark',
    icon: BarChart2
};

export const Text = Template.bind({});

Text.args = {
    children: 'Text',
    type: 'text',
    theme: 'dark',
    icon: Home
};
export const Small = Template.bind({});

Small.args = {
    children: 'Small',
    type: 'small',
    theme: 'dark',
};

export const Tiny = Template.bind({});

Tiny.args = {
    children: 'Tiny',
    type: 'tiny',
    theme: 'dark',
};
