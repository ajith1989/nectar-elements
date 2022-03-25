import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '../src/components/Box';
import { BoxProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Box',
    component: Box,
};

export default meta;

const Template: Story<BoxProps> = args => <Box {...args} />;

export const Gradient1 = Template.bind({});

Gradient1.args = {
    children: 'This is a content which represents the look and feel of box with gradient 1.',
    gradient: 'gradient1',
};

export const Gradient2 = Template.bind({});

Gradient2.args = {
    children: 'This is a content which represents the look and feel of box with gradient 2.',
    gradient: 'gradient2',
};

export const Dark = Template.bind({});

Dark.args = {
    children: 'This is a content which represents the look and feel of box with dark gradient.',
    gradient: 'dark',
};

export const Light = Template.bind({});

Light.args = {
    children: 'This is a content which represents the look and feel of box with dark gradient',
    gradient: 'light',
};
